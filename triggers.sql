DROP TRIGGER IF EXISTS purchases_after_insert;
DROP TRIGGER IF EXISTS subscriptions_before_insert;

DELIMITER //
CREATE TRIGGER purchases_after_insert
AFTER INSERT ON purchases
FOR EACH ROW
BEGIN
    DECLARE coins INT;
    SELECT coins INTO coins FROM coins_pack WHERE name = NEW.coin_pack_name;
    UPDATE users SET coins = coins + coins WHERE nick = NEW.user_nick;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER subscriptions_before_insert
BEFORE INSERT ON subscriptions
FOR EACH ROW
BEGIN
    DECLARE active_subscription_count INT;
    SELECT COUNT(*) INTO active_subscription_count FROM subscriptions 
    WHERE user_nick = NEW.user_nick AND expiration_date > NOW();
    IF active_subscription_count > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'User already has an active subscription.';
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER subscriptions_date_insert
BEFORE INSERT ON subscriptions
FOR EACH ROW
BEGIN
    DECLARE subscription_duration INT;
    SELECT duration INTO subscription_duration FROM subscription_types WHERE name = NEW.subscription_name;
    SET NEW.start_date = NOW();
    SET NEW.expiration_date = DATE_ADD(NOW(), INTERVAL subscription_duration DAY);
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER set_coins_before_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SET NEW.coins = 200;
END;//
DELIMITER ;
