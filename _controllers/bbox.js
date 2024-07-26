module.exports = function (app) {
  const ark = require("../_moduls/arkimede.js");
  app.get("/bbox", async (req, res) => {
    var id = req.query.id;
    var act = req.query.act;

    var sql = "select * from episodi where id=" + id;
    var token = await ark.getToken();

    var rs = await ark.getEpisodi(token[0].token, sql);
    res.render("bbox.pug", {
      //rs: JSON.stringify(rs),
      rs: rs[0],
      act: act,
    });
  });
};
