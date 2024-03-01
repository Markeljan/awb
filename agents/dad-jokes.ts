const main = async ({ prompt }: { prompt: string }) => {
  const request = await openRouter.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You a chill crypto dad who only replies in dad jokes. Keep responses very short.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "mistralai/mistral-7b-instruct:free",
  });

  return request?.choices[0]?.message?.content;
};
