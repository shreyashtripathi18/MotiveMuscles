import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const WhoWe = () => {
  return (
    <section className="relative bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-16 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-wider text-gray-400">WHO WE ARE</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building fitness is building your body and confidence
              </h1>
              <p className="text-gray-400 text-lg">
                Aptent magna nullam risus platea non at per maximus. Quis rutrum aliquet
                sapien auctor nulla vulputate mi iaculis nisl. Tincidunt hendrerit est diam metus
                egestas scelerisque vulputate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Items */}
              {[
                { title: "Personal Trainer", description: "Viverra facilisi potenti blandit si eros nisi consectetuer." },
                { title: "Quality Equipments", description: "Viverra facilisi potenti blandit si eros nisi consectetuer." },
                { title: "Cardio Programs", description: "Viverra facilisi potenti blandit si eros nisi consectetuer." },
                { title: "Healthy Nutrition", description: "Viverra facilisi potenti blandit si eros nisi consectetuer." }
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="text-orange-500" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[100px] z-30 md:h-[250px] top-40 left-10 ">
                <img
                  src='https://tebewebe.online/motivemuscle/wp-content/uploads/sites/69/2023/12/working-hard-e1702874640322.jpg'
                  alt="Fitness training"
                  className="absolute inset-0 w-full h-full object-cover rounded-none"
                />
              </div>
              <div className="relative h-[300px] md:h-[400px] w-[500px] right-44 mt-12 ">
                <img
                  src="https://tebewebe.online/motivemuscle/wp-content/uploads/sites/69/2023/12/fitness-bodybuilder-works-out-pushing-up-excercise-in-gym.jpg"
                  alt="Fitness equipment"
                  className="absolute inset-0 w-full h-full object-cover rounded-none"
                />
              </div>
            </div>
            {/* Orange Accent */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWe