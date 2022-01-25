import "setimmediate";
import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dnxv9ctit",
  api_key: "184269782326534",
  api_secret: "N8rNXdb-C5Lf54TTmjdwvMMtl7M",
  secure: true,
});

describe("Test in fileUpload  ", () => {
  test("should load a file and return their url", async () => {
    const resp = await fetch(
      "https://m.media-amazon.com/images/I/41--vmKHmzL._AC_.jpg"
    );

    const blob = await resp.blob();
    //create a file from a random image
    const file = new File([blob], "image.jpg");
    //now call the fileUpload function and test if the img is uploaded it
    const url = await fileUpload(file);
    //to probe the img was upload, later it will be deleted
    console.log(url);
    //cloudinary must return the img url as string
    expect(typeof url).toBe("string");
    //delete test image by id on cloudinary
    const segments = url.split("/");
    //extract from the img url the last segment with the cloudinary id
    const imgId = segments[segments.length - 1].replace(".jpg", "");
    //call cloudinary API to delete the img by their id
    await cloudinary.v2.api.delete_resources(imgId, {}, () => {
      //done();
      //console.log("");
    });
  });
});
