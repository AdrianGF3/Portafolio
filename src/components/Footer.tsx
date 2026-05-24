function Footer() {
    return (
        <footer id="contact" className="bg-black py-16 px-24 w-full overflow-hidden">
            <h2 className="text-[3rem] font-extrabold leading-[1] mt-2 text-purple-500 mb-6">Información de contacto</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <p className="text-white text-[1 rem] font-extrabold">Correo electrónico: adrian.gofa@gmail.com</p>
                    <p className="text-white text-[1 rem] font-extrabold">Teléfono: +722580407</p>
                    <p className="text-white text-[1 rem] font-extrabold">LinkedIn: Adrián Gómez Fabregat</p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;