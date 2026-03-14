export default function Pillars() {
  return (
    <section className="px-6 md:px-16 py-20">

      <h2 className="text-2xl font-bold mb-10">
        Three Pillars, One Pathway
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-[#dcd5c7] p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-2">Leadership</h3>
          <p>Developing leaders across Africa.</p>
        </div>

        <div className="bg-yellow-400 p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-2">Learning</h3>
          <p>Skills, programs, and innovation.</p>
        </div>

        <div className="bg-blue-200 p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-2">Lifestyle</h3>
          <p>Empowering purposeful living.</p>
        </div>

      </div>
    </section>
  );
}