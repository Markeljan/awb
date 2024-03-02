const main = async ({ prompt }: { prompt: string }) => {
  const image =
    "https://3citujvkqdgeo2y1.public.blob.vercel-storage.com/awbbeta2-AiT1ZxTf16zgTzspt6G2exPiOWpMRA.png";
  const mask =
    "https://3citujvkqdgeo2y1.public.blob.vercel-storage.com/awb_maks2-zqUfqSYGjhM1cpLCXEOu4HUjleu2Cr.png";
  const model =
    "stability-ai/stable-diffusion-inpainting:95b7223104132402a9ae91cc677285bc5eb997834bd2349fa486f53910fd68b3";

  const input = {
    prompt: prompt,
    image: image,
    mask: mask,
  };

  const output = await libraries.ai.replicate.run(model, { input });

  try {
    await libraries.web3.crossChain({
      metadata: {
        image: output,
        title: prompt,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return output;
};
