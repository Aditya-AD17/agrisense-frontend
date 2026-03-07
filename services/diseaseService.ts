export async function predictDisease(file: File) {

  await new Promise((r) => setTimeout(r, 2000))

  return {
    disease: "Leaf Blight",
    confidence: 0.92,
    remedy: "Apply copper fungicide and remove infected leaves."
  }

}