import PBM from "@/components/PBM"
import Image from "next/image"

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
                        top: "200px",
                        left: "240px",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={240}
                    width={160}
                    alt="Placeholder"
                    style={{
                        bottom: "160px",
                        right: "240px",
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
                        bottom: "320px",
                        left: "320px",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={400}
                    width={320}
                    alt="Placeholder"
                    style={{
                        top: "240px",
                        right: "400px",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={400}
                    width={480}
                    alt="Placeholder"
                    style={{
                        bottom: "240px",
                        right: "480px",
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
                        bottom: "160px",
                        left: "640px",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={240}
                    width={160}
                    alt="Placeholder"
                    style={{
                        top: "560px",
                        right: "480px",
                    }}
                ></Image>
                <Image
                    src="/assets/placeholder.jpg"
                    height={240}
                    width={320}
                    alt="Placeholder"
                    style={{
                        top: "400px",
                        left: "400px",
                    }}
                ></Image>
            </PBM>
        </main>
    )
}
