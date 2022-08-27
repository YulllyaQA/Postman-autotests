pm.test("Тест № 1", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.birth_year).to.eql("57BBY");
});

pm.test("Тест № 2", function () {
    pm.response.to.have.status(200);
});

pm.test("Тест № 3", function () {
    pm.expect(pm.response.text()).to.include("fair");
});