export const VideoWrapper = () => {
    return (
    <div className="col-span-1 max-tabletLg:order-2 max-tabletLg:pt-[3.125rem] tabletLg:col-span-6">  
        <div className="relative flex h-lvh max-h-[24.375rem] items-center justify-center laptop:max-h-[32.75rem]">
            <video controls >
                <source src='https://videos.ctfassets.net/yc55p4rioxpm/yxsOH0NYVGbyEoa6NY7BG/679ad200cbf2ee1879f22ac694acd174/example.mp4' type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
    </div>

    )
}