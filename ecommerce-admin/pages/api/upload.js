import multiparty from "multiparty";

export default function handle(req, res) {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    console.log(files.file.length);
    console.log(fields);
    res.json("ok");
  });
}

export const config = {
  api: { bodyParser: false },
};
