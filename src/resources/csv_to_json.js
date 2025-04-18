import Papa from "papaparse";

export default function csvToJson(file) {
  console.log(file);
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      delimiter: ",",
      header: true,
      complete: function(results) {
        console.log("Parsing complete:", results)
        resolve(results.data);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
}