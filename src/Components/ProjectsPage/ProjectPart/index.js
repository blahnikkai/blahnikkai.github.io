export default function index({proj}) {
    const {img_name, alt_txt, link, title, tech, desc} = proj
    return (
        <>
            <img src={require(`../../../images/project_imgs/${img_name}`)} alt={alt_txt}></img>
            <a href={link}>{title}</a>
            <div>{tech}</div>
            <div>{desc}</div>
        </>
    )
}