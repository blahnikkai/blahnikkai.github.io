export default function ProjectPart({proj}) {
    const {img_name, alt_txt, link, title, tech} = proj
    return (
        <>
            <div className='short_item'>
                <img className='short_img' src={require(`../../../images/project_imgs/${img_name}`)} alt={alt_txt}></img>
            </div>
            <a className='short_item' href={link}>{title}</a>
            <div className='short_item'>{tech}</div>
        </>
    )
}