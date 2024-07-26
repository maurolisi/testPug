module.exports = function (app) {
  const ark = require("../_moduls/arkimede.js");
  app.get("/ST", async (req, res) => {
    var sql = "select top 700 * from episodi";
    var token = await ark.getToken();
    var rs = await ark.getEpisodi(token[0].token, sql);
    var start = Date.now();

    // let tbl = "";
    // let n = 0;
    // rs.map((item) => {
    //   n++;
    //   tbl += '<tr class="righe riga_' + item.id + '">';
    //   tbl +=
    //     '<td class="align-middle"><img width=160 src="' +
    //     item.FotoSuStic +
    //     '"/></td>';
    //   tbl += '<td class="align-middle">' + item.Serie + "</td>";
    //   tbl += '<td class="align-middle">' + item.Stagione_Episodio + "</td>";
    //   tbl += '<td class="align-middle">' + item.TitoloOriginale + "</td>";
    //   tbl += '<td class="align-middle">' + item.TitoloItaliano + "</td>";
    //   tbl +=
    //     '<td class="text-center align-middle"><i onclick="bbox(\'' +
    //     item.id +
    //     "','view')\" class=\"fas fa-search fa-2x text-success c-p\"></i></td>";
    //   tbl +=
    //     '<td class="text-center align-middle"><i onclick="bbox(\'' +
    //     item.id +
    //     "','edit')\" class=\"fas fa-edit fa-2x text-info c-p\"></i></td>";
    // });

    // tbl = "<tbody>" + tbl + "</tbody>";
    res.render("table.pug", {
      //tbl: tbl,
      rs: rs,
      start: start,
    });
  });
};
