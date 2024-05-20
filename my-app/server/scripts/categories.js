module.exports = function(app, db) {
    app.get('/categories_tree', async (req, res) => {
        const [mainCategories] = await db.promise().query('SELECT name,description FROM categories WHERE parent_category IS NULL').catch(err => { return []; });

        const categoriesWithSubcategories = await Promise.all(mainCategories.map(async (category) => {
            const [subcategories] = await db.promise().query('SELECT name FROM categories WHERE parent_category = ?', [category.name]).catch(err => { return []; });
            return {
                ...category,
                subcategories: subcategories.map(subcategory => subcategory.name),
            };
        }));
        res.json(categoriesWithSubcategories);
    });

    app.get('/lectures/:doc', async (req, res) => {
        const { document } = req.params;
        const [subcategories] = await db.promise().query('SELECT category_name FROM categories_lectures WHERE lecture_name = ?', [document]).catch(err => { return []; });
        res.json(subcategories);
    });
};