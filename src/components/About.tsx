export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre Nós</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A GlobalSwapAngola é uma provedora líder de Soluções de Importação, que faz a ponte entre mercados internacionais e empresas angolanas. Com anos de experiência e um compromisso com a excelência, ajudamos inúmeras empresas a crescer por meio de importação estratégica.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <img
              src="image/02.jpg"
              alt="Team meeting"
              className="aspect-[16/9] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-full"
            />
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              Nossa missão é simplificar o comércio internacional para empresas angolanas, fornecendo Soluções de Importação confiáveis, eficientes e econômicas. Entendemos os desafios do comércio global e trabalhamos incansavelmente para superá-los.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">Time Expert.</strong>Nossos profissionais têm profundo conhecimento do comércio internacional e dos mercados locais.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">Global Network.</strong> Fortes relacionamentos com fornecedores em todo o mundo garantem preços competitivos e fornecimento confiável.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">Customer Focus.</strong> Estamos comprometidos com o seu sucesso, fornecendo soluções personalizadas para as necessidades do seu negócio.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}