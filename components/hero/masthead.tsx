import Typewriter from "typewriter-effect";

export const Masthead: React.FC = () => (
    <>
        <h1 className="text-[5.5rem] leading-none tracking-wide">
            Need Quality Content <br /> For Your{" "}
            <span className="underline underline-offset-[10px] decoration-amber-600">
                <Typewriter
                    options={{
                        strings: ["Website?", "Blog?", "Article?", "Product?"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </h1>
        <h2 className="text-4xl tracking-wide">You&apos;re in the right place!</h2>
    </>
);
