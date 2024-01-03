import React from 'react'

const ProjectA = ({ title, body, image, gitHubLink, site, collab, techUsed, video }) => {
  return (
    <div className="w-full h-96 py-10 px-80 flex justify-center">
      <div className="flex flex-col text-left  min-w-60 max-w-70 w-2/3 mr-5">
        <p className="text-6xl font-bold"> {title} </p>
        <p className="h-auto max-h-300 text-xl"> {body} </p>
        <p>{collab}</p>
        {techUsed && <ul className="flex space-x-1">
          {techUsed.map((technology) => {
            return (
              <div class="border w-fit h-11 p-2 text-lg text-white font-bold rounded-2xl bg-red-400">
                {technology}
              </div>
            )
          })}
        </ul>}
        <div className="h-1/3">
          <a href={gitHubLink} className="" target="_blank" alt="">
            <button class="border p-2 text-lg text-white font-bold rounded-2xl bg-slate-800 hover:outline-dashed hover:outline-2 hover:outline outline-black">
              Github
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/3 min-w-96 max-w-96 h-full">
        {image && <a href={site} target="_blank"><img className="object-cover rounded-3xl drop-shadow-lg border hover:outline-dashed hover:outline-2 hover:outline" src={require(`./Graphics/${image}`)} alt="" /></a>}
        {video && <video loop className="w-full h-full object-fill rounded-3xl drop-shadow-lg border hover:outline-dashed hover:outline-2 hover:outline" controls autostart autoPlay src={require(`./Graphics/${video}`)} type="video/mp4" />}
      </div>
    </div>
  )
}

export default ProjectA