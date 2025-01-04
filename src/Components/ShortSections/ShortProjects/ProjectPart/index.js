export default function ProjectPart({proj}) {
    const {img_name, alt_txt, link, title, tech} = proj
    return (
        <>
            <div className='short_item short_project'>
                <img
                    className='short_img'
                    src={require(`../../../../images/project_imgs/${img_name}`)}
                    alt={alt_txt}
                />
            </div>
            <a className='short_item short_project' href={link}>{title}</a>
            <div className='short_item short_project'>{tech}</div>
        </>
    )
}
