export default function index({proj}) {
    const {img_name, alt_txt, link, title, tech, desc} = proj
    return (
        <>
            <div>
                <img className='grid_img' src={require(`../../../images/project_imgs/${img_name}`)} alt={alt_txt}></img>
            </div>
            <a href={link}>{title}</a>
            <div>{tech}</div>
            <ul>
                {desc.map((bullet, i) => 
                    <li key={i} className='desc_bullet'>{bullet}</li>
                )}
            </ul>
        </>
    )
}