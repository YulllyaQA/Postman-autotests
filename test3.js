pm.test("Тест № 1", function () {
  pm.expect(pm.cookies.has("PAMPAM")).to.be.false;
});

pm.test("Тест № 2", function () {
  pm.expect(pm.response.responseTime).to.be.below(2819);
});

pm.test("Тест № 3", function () {
  pm.expect(pm.response.json().host).to.eql(pm.environment.get("https://swapi.dev"));
});