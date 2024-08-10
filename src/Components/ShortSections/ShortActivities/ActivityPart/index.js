export default function ActivityPart({act}) {
    const {img_name, alt_txt, organization, title} = act
    return (
        <>
            <div className='short_item'>
                <img
                    className='short_img'
                    src={require(`../../../../images/activity_imgs/${img_name}`)}
                    alt={alt_txt}
                />
            </div>
            <div className='short_item'>{organization}</div>
            <div className='short_item'>{title}</div>
        </>
    )
}