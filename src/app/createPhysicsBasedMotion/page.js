import Image from "next/image"
import PBM from "@/components/pbm"

export default function page() {
    return (
        <main>
            <PBM className="layer layer--bottom" intensity={10}>
                <Image
                    src="/assets/placeholder.jpg"
                    height={320}
                    width={240}
                    alt="Placeholder"
                    style={{
                        top: "5vh",
                        left: "5vw",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={240}
                    width={160}
                    alt="Placeholder"
                    style={{
                        bottom: "10vh",
                        right: "5vw",
                    }}
                ></Image>
            </PBM>
            <PBM className="layer layer--middle" intensity={20}>
                <Image
                    src="/assets/placeholder.jpg"
                    height={400}
                    width={280}
                    alt="Placeholder"
                    style={{
                        bottom: "5vw",
                        left: "15vw",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={400}
                    width={320}
                    alt="Placeholder"
                    style={{
                        top: "5vw",
                        right: "10vw",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={320}
                    width={480}
                    alt="Placeholder"
                    style={{
                        bottom: "10vw",
                        right: "30vw",
                    }}
                ></Image>
            </PBM>
            <PBM className="layer layer--top" intensity={40}>
                <Image
                    src="/assets/placeholder.jpg"
                    height={320}
                    width={240}
                    alt="Placeholder"
                    style={{
                        top: "15vh",
                        right: "35vw",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={240}
                    width={160}
                    alt="Placeholder"
                    style={{
                        bottom: "5vh",
                        left: "45vw",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={240}
                    width={320}
                    alt="Placeholder"
                    style={{
                        top: "20vh",
                        left: "20vw",
                    }}
                ></Image>
            </PBM>
        </main>
    )
}
