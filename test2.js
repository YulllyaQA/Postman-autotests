pm.test("Тест № 1", function () {
    pm.response.to.be.ok;   
});

pm.test("Тест № 2", function () {
    pm.expect(pm.response.json().surface_water).to.be.a("string");
});

pm.test("Тест № 3", function () {
    pm.response.to.have.header('Content-Type', 'application/json');  
});