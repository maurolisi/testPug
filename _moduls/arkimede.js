var point = "https://www.arkimede.net/api/rest/";
async function getToken() {
  let formData = new FormData();
  formData.set("user", "arkimede");
  formData.set("password", "testApi");
  const response = await fetch(point + "getToken/", {
    body: formData,
    method: "post",
  });
  const data = await response.json();
  return data;
}
async function getEpisodi(token, sql = "") {
  let formData = new FormData();
  formData.set("token", token);
  if (sql != "") formData.set("sql", sql);
  const response = await fetch(point + "getEpisodi/", {
    body: formData,
    method: "post",
  });
  const data = await response.json();
  return data;
}

exports.getToken = getToken;
exports.getEpisodi = getEpisodi;
