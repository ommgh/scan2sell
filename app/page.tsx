export default function Home() {
    return (
        <main className="flex w-screen h-screen flex-col items-center justify-center relative text-white">
            <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center bg-black z-[-1] overflow-hidden">
                <img
                    src="/images/landing-bg.jpg"
                    className="w-full object-center opacity-40"
                />
            </div>
            <div className="text-5xl font-bold select-none">Scan2Sell</div>
        </main>
    );
}
