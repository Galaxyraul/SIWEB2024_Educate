INSERT INTO coins_pack (name, price, quantity,image_path)
VALUES 
('Paquete cobre', 4.99, 500,'images/coins_packs/bronze.png'),
('Paquete plata', 9.99, 1100,'images/coins_packs/silver.png'),
('Paquete oro', 19.99, 2300,'images/coins_packs/gold.png'),
('Paquete diamante', 49.99, 6000,'images/coins_packs/diamond.png');


INSERT INTO subscription_types (name, price, description, coins_per_day, duration)
VALUES 
('Subscripcion cobre', 4.99, 'Lo importante es la calidad no la cantidad', 10, 1),
('Subscripcion plata', 9.99, 'Para aprenderodes novicios', 20, 3),
('Subscripcion oro', 19.99, 'Sacia tu hambre de conocimiento', 30, 6),
('Subscripcion diamante', 49.99, 'Nadie aprende mas que tu', 40, 12);

INSERT INTO categories (name, description, parent_category)
VALUES 
('Matematicas', 'Estudio de los numeros, formas y patrones', NULL),
('Fisica', 'Estudio de la materia y su movimiento a traves del espacio y el tiempo', NULL),
('Programacion', 'Creacion de programas informaticos', NULL),
('Historia', 'Estudio del pasado', NULL),
('Literatura', 'Estudio de las obras escritas', NULL),
('Geografia', 'Estudio de los lugares y las relaciones entre las personas y sus entornos', NULL),
('Ciencias Sociales', 'Estudio de las sociedades y las relaciones humanas', NULL),
('Arte', 'Estudio de las expresiones humanas a traves de medios visuales, auditivos o performaticos', NULL),
('Matematicas Avanzadas', 'Estudio avanzado de los numeros, formas y patrones', 'Matematicas'),
('Fisica Cuantica', 'Estudio de la fisica a nivel microscopico', 'Fisica'),
('Desarrollo Web', 'Creacion de sitios y aplicaciones web', 'Programacion'),
('Historia Moderna', 'Estudio de la historia reciente', 'Historia'),
('Literatura Contemporanea', 'Estudio de las obras escritas en los ultimos años', 'Literatura'),
('Musica', 'Estudio de los sonidos organizados en el tiempo', 'Arte'),
('Pintura', 'Estudio de la aplicacion de pigmento a una superficie para crear una imagen', 'Arte'),
('Geografia Humana', 'Estudio de los patrones y procesos que forman la interaccion humana con el medio ambiente', 'Geografia'),
('Geografia Fisica', 'Estudio de los fenomenos naturales de la Tierra', 'Geografia'),
('Sociologia', 'Estudio del desarrollo, estructura y funcionamiento de la sociedad humana', 'Ciencias Sociales'),
('Psicologia', 'Estudio de la mente y el comportamiento', 'Ciencias Sociales'),
('algebra', 'Estudio de las estructuras algebraicas', 'Matematicas'),
('Geometria', 'Estudio de las propiedades y relaciones de los puntos, lineas, angulos, y figuras', 'Matematicas'),
('Calculo', 'Estudio de los cambios y los movimientos', 'Matematicas'),
('Fisica Clasica', 'Estudio de la fisica antes de la teoria de la relatividad', 'Fisica'),
('Relatividad', 'Estudio de la fisica que incorpora la teoria de la relatividad', 'Fisica'),
('Programacion Funcional', 'Estilo de programacion que trata la computacion como la evaluacion de funciones matematicas', 'Programacion'),
('Programacion Orientada a Objetos', 'Estilo de programacion basado en el concepto de "objetos"', 'Programacion'),
('Historia Antigua', 'Estudio de la historia desde el comienzo de la civilizacion humana hasta la caida del Imperio Romano', 'Historia'),
('Historia Medieval', 'Estudio de la historia desde la caida del Imperio Romano hasta el Renacimiento', 'Historia'),
('Poesia', 'Estudio de la literatura que enfatiza la estetica y el ritmo de la lengua', 'Literatura'),
('Prosa', 'Estudio de la literatura escrita en forma de prosa', 'Literatura');


INSERT INTO users (nick, role, mail, password) VALUES ('FionaDavis', 2, 'fiona.davis@mail.com', '$2b$10$i0UKhCbXP8PkBmnqvJAexObNs8kZA3Fk0Kh3rWtPOKM2ROp0bb6m6'),
('JaneSmith', 2, 'jane.smith@mail.com', '$2b$10$mNbAdQIpG5AnquAUUUesYOZ3VLzkvAzRkOBhrbIEdseeMc9wZXcrK'),
('GeorgeWilson', 1, 'george.wilson@mail.com', '$2b$10$iJeAUdmR3R.HetrXwObHI.S/iz1aavgbMhI3u5c/CBf3ARRIooOuC'),
('EthanMiller', 1, 'ethan.miller@mail.com', '$2b$10$YFKy1BWn3BA1jZnc1/t0.eDFZd0jrYTmdPfZzcUZqF6BU1VXJuxva'),
('BobWilliams', 2, 'bob.williams@mail.com', '$2b$10$IX4WTHXFpmrCx1wkG0Ivt.92Bbwwg5n1DDOyRmDsX8fb8Qq4WJ/cu'),
('AliceJohnson', 1, 'alice.johnson@mail.com', '$2b$10$DtUX.0QBgo11yU5PpAi82ekZ/X80mpk3aa8XCWB7Dk6RTMUnSSNOO'),
('HannahMoore', 2, 'hannah.moore@mail.com', '$2b$10$JwAyWfOqj7jlktYkc8Ajvez4.JX2LF.SUgnp2uZ2S.KCishfZL3ke'),
('CritiqueQueen', 3, 'critique.queen@mail.com', '$2b$10$Q5qu4j5UoZjVhBMSh5q1Q.fo1sFyFAF6FESn.XM25ss/qenf6rTbS'),
('FeedbackFreak', 3, 'feedback.freak@mail.com', '$2b$10$x1r7y03H0vOvv15mErdk8.Q8XfT9UMPVifBUkiAzLAK1SNOPUwgy6'),
('ReviewMaster', 3, 'review.master@mail.com', '$2b$10$R0dKtLbSqD2vbExuOOVkn.EpJ5kzIPSM38TY8qY3HYcvhOOuD2pi6'),
('InsightGuru', 3, 'insight.guru@mail.com', '$2b$10$O8bl9jU.SUfFMuLWOQ/eweETwD69xhORQ8LUOTdywfRrDiwtWLfsW'),
('OpinionOracle', 3, 'opinion.oracle@mail.com', '$2b$10$nK6FTPvva3mgmdnU6qvRG.vOjO6C2YKPCl/gp1NqlQXBaxUTLOj6O'),
('CharlieBrown', 1, 'charlie.brown@mail.com', '$2b$10$4cqKPybfoeKGORonZn9zEuHRQtrh1Kw4gRCPyUy2zZjuwTaBAeNhi'),
('JohnDoe', 1, 'john.doe@mail.com', '$2b$10$Kjjm.DQErv/VpT1AEQluLeTABcKQIi6uWFnxSJc7O/A2oevWMeYGi'),
('DianaClark', 2, 'diana.clark@mail.com', '$2b$10$34B0d.41rI1jhHyYjfQJ0uHR24TdY9c3Pxmg3Vj8htaE6d/2rmhKO'),
('reader', 1, 'new.reader@mail.com', '$2b$10$vNp64XR61Aez3d0UnAPtcOETD/jIjBsCzObY.LCPoX8cexwvWZGLK'),
('creator', 2, 'new.creator@mail.com', '$2b$10$vNp64XR61Aez3d0UnAPtcOETD/jIjBsCzObY.LCPoX8cexwvWZGLK'),
('reviewer', 3, 'new.reviewer@mail.com', '$2b$10$vNp64XR61Aez3d0UnAPtcOETD/jIjBsCzObY.LCPoX8cexwvWZGLK');

INSERT INTO lectures(name, description,status, creator, path, reviewer) VALUES ('Historia de la fisica', 'Historia de la fisica desde la antigüedad hasta la actualidad', 1, 'FionaDavis', 'lectures/history_of_physics.pdf', 'ReviewMaster'),
('Historia de la literatura', 'Historia de la literatura desde la antigüedad hasta la actualidad', 3, 'JaneSmith', 'lectures/history_of_literature.pdf', NULL),
('Historia de la programacion', 'Historia de la programacion desde la antigüedad hasta la actualidad', 1, 'BobWilliams', 'lectures/history_of_programming.pdf', 'FeedbackFreak'),
('Historia de la musica', 'Historia de la musica desde la antigüedad hasta la actualidad', 2, 'HannahMoore', 'lectures/history_of_music.pdf', 'CritiqueQueen'),
('Historia de la pintura', 'Historia de la pintura desde la antigüedad hasta la actualidad', 3, 'DianaClark', 'lectures/history_of_painting.pdf', NULL),
('Historia de la geografia', 'Historia de la geografia desde la antigüedad hasta la actualidad', 1, 'FionaDavis', 'lectures/history_of_geography.pdf', 'InsightGuru'),
('Historia de la sociologia', 'Historia de la sociologia desde la antigüedad hasta la actualidad', 3, 'JaneSmith', 'lectures/history_of_sociology.pdf', NULL),
('Historia de la psicologia', 'Historia de la psicologia desde la antigüedad hasta la actualidad', 1, 'BobWilliams', 'lectures/history_of_psychology.pdf', 'ReviewMaster'),
('Historia del algebra', 'Historia del algebra desde la antigüedad hasta la actualidad', 2, 'HannahMoore', 'lectures/history_of_algebra.pdf', 'FeedbackFreak'),
('Historia de la geometria', 'Historia de la geometria desde la antigüedad hasta la actualidad', 3, 'DianaClark', 'lectures/history_of_geometry.pdf', NULL),
('Historia del calculo', 'Historia del calculo desde la antigüedad hasta la actualidad', 1, 'FionaDavis', 'lectures/history_of_calculus.pdf', 'CritiqueQueen'),
('Historia de la fisica clasica', 'Historia de la fisica clasica desde la antigüedad hasta la actualidad', 3, 'JaneSmith', 'lectures/history_of_classical_physics.pdf', NULL),
('Historia de la relatividad', 'Historia de la relatividad desde la antigüedad hasta la actualidad', 1, 'BobWilliams', 'lectures/history_of_relativity.pdf', 'InsightGuru'),
('Historia de la programacion funcional', 'Historia de la programacion funcional desde la antigüedad hasta la actualidad', 2, 'HannahMoore', 'lectures/history_of_functional_programming.pdf', 'ReviewMaster'),
('Historia de la programacion orientada a objetos', 'Historia de la programacion orientada a objetos desde la antigüedad hasta la actualidad', 3, 'DianaClark', 'lectures/history_of_object_oriented_programming.pdf', NULL),
('Historia de la historia antigua', 'Historia de la historia antigua desde la antigüedad hasta la actualidad', 1, 'FionaDavis', 'lectures/history_of_ancient_history.pdf', 'FeedbackFreak'),
('Historia de la historia medieval', 'Historia de la historia medieval desde la antigüedad hasta la actualidad', 3, 'JaneSmith', 'lectures/history_of_medieval_history.pdf', NULL),
('Ecuaciones', 'Metodos de resolucion de ecuaciones basicas', 1, 'BobWilliams', 'lectures/ecuaciones.html', 'CritiqueQueen');

INSERT INTO categories_lectures (lecture_name, category_name) VALUES ('Historia de la fisica', 'Fisica')	,
('Historia de la fisica', 'Historia'),
('Historia de la literatura', 'Literatura'),
('Historia de la programacion', 'Programacion'),
('Historia de la musica', 'Arte'),
('Historia de la pintura', 'Arte'),
('Historia de la geografia', 'Geografia'),
('Historia de la sociologia', 'Ciencias Sociales'),
('Historia de la psicologia', 'Ciencias Sociales'),
('Historia del algebra', 'Matematicas'),
('Historia de la geometria', 'Matematicas'),
('Historia del calculo', 'Matematicas'),
('Historia de la fisica clasica', 'Fisica'),
('Historia de la relatividad', 'Fisica'),
('Historia de la programacion funcional', 'Programacion'),
('Historia de la programacion orientada a objetos', 'Programacion'),
('Historia de la historia antigua', 'Historia'),
('Historia de la historia medieval', 'Historia'),
('Ecuaciones', 'Matematicas');

INSERT INTO videos (title, description, url) VALUES 
('Batallas de ecuaciones?','Las matematicas usadas como desafio intelectual','https://www.youtube.com/watch?v=cWR62tJtDAo'),
('Ecuaciones Lineales', 'Un tutorial sobre como resolver ecuaciones lineales', 'https://www.youtube.com/watch?v=8rT0DZbYGEs'),
('Ecuaciones Cuadraticas', 'Un tutorial sobre como resolver ecuaciones cuadraticas', 'https://www.youtube.com/watch?v=a9bmHwbuZc0'),
('Ecuaciones Diferenciales', 'Un tutorial sobre como resolver ecuaciones diferenciales', 'https://www.youtube.com/watch?v=MdKOjS8-oNw'),
('Sistema de Ecuaciones', 'Un tutorial sobre como resolver sistemas de ecuaciones', 'https://www.youtube.com/watch?v=IF7WV5VVci4');

INSERT INTO video_lecture (video_url,lecture_name) VALUES 
('https://www.youtube.com/watch?v=cWR62tJtDAo','Ecuaciones'),
('https://www.youtube.com/watch?v=8rT0DZbYGEs', 'Ecuaciones'),
( 'https://www.youtube.com/watch?v=a9bmHwbuZc0', 'Ecuaciones'),
('https://www.youtube.com/watch?v=MdKOjS8-oNw', 'Ecuaciones'),
('https://www.youtube.com/watch?v=IF7WV5VVci4', 'Ecuaciones');

INSERT INTO purchases (user_nick, coin_pack_name, purchase_date) VALUES 
('FionaDavis', 'Paquete cobre', CURDATE()),
('FionaDavis', 'Paquete oro', CURDATE()),
('JaneSmith', 'Paquete oro', CURDATE()),
('JaneSmith', 'Paquete plata', CURDATE()),
('GeorgeWilson', 'Paquete cobre', CURDATE()),
('GeorgeWilson', 'Paquete plata', CURDATE()),
('GeorgeWilson', 'Paquete oro', CURDATE()),
('EthanMiller', 'Paquete plata', CURDATE()),
('EthanMiller', 'Paquete oro', CURDATE()),
('EthanMiller', 'Paquete cobre', CURDATE()),
('BobWilliams', 'Paquete oro', CURDATE()),
('BobWilliams', 'Paquete cobre', CURDATE()),
('AliceJohnson', 'Paquete plata', CURDATE()),
('AliceJohnson', 'Paquete oro', CURDATE()),
('AliceJohnson', 'Paquete cobre', CURDATE()),
('HannahMoore', 'Paquete cobre', CURDATE()),
('HannahMoore', 'Paquete plata', CURDATE()),
('HannahMoore', 'Paquete diamante', CURDATE()),
('CritiqueQueen', 'Paquete oro', CURDATE()),
('CritiqueQueen', 'Paquete cobre', CURDATE()),
('FeedbackFreak', 'Paquete plata', CURDATE()),
('FeedbackFreak', 'Paquete oro', CURDATE()),
('FeedbackFreak', 'Paquete cobre', CURDATE()),
('ReviewMaster', 'Paquete cobre', CURDATE()),
('ReviewMaster', 'Paquete plata', CURDATE()),
('InsightGuru', 'Paquete oro', CURDATE()),
('InsightGuru', 'Paquete cobre', CURDATE()),
('InsightGuru', 'Paquete plata', CURDATE());

INSERT INTO subscriptions (user_nick, subscription_name, start_date) VALUES 
('BobWilliams', 'Subscripcion cobre', DATE_SUB(CURDATE(), INTERVAL 2 MONTH)),
('AliceJohnson', 'Subscripcion diamante', DATE_SUB(CURDATE(), INTERVAL 1 YEAR)),
('HannahMoore', 'Subscripcion plata', DATE_SUB(CURDATE(), INTERVAL 1 MONTH)),
('CritiqueQueen', 'Subscripcion oro', DATE_SUB(CURDATE(), INTERVAL 2 YEAR)),
('FeedbackFreak', 'Subscripcion cobre', DATE_SUB(CURDATE(), INTERVAL 1 MONTH)),
('ReviewMaster', 'Subscripcion plata', DATE_SUB(CURDATE(), INTERVAL 1 YEAR)),
('InsightGuru', 'Subscripcion oro', DATE_SUB(CURDATE(), INTERVAL 2 MONTH));

INSERT INTO readers_lectures (user_nick, lecture_name) VALUES 
('JohnDoe', 'Historia de la fisica'),
('JohnDoe', 'Historia de la literatura'),
('DianaClark', 'Historia de la programacion'),
('DianaClark', 'Historia de la musica'),
('reader', 'Historia de la pintura'),
('reader', 'Historia de la geografia'),
('creator', 'Historia de la sociologia'),
('creator', 'Historia de la psicologia'),
('reviewer', 'Historia del algebra'),
('reviewer', 'Historia de la geometria'),
('reviewer', 'Historia del calculo');