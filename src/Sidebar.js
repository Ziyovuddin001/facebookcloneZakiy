import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <SidebarRow
                    src={user.photoURL}
                    title={user.displayName}
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
                    title="COVID-19 information Centre"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                    title="Friends"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                    title="Groups"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                    title="Vidoes"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
                    title="Ads"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Doj4fJpfxHx.png"
                    title="Business Suite"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
                    title="Crisis Response"
                />
                <SidebarRow
                    url="data:image/png;base64,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"
                    title="Events"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"
                    title="Films"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
                    title="Friend Lists"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
                    title="Fundraisers"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
                    title="Games"
                />
                <SidebarRow
                    url="data:image/png;base64,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"
                    title="Gaming video"
                />
                <SidebarRow
                    url="https://cdn2.iconfinder.com/data/icons/employment-business/256/Job_Search-512.png"
                    title="Jobs"
                />
                <SidebarRow
                    url="https://previews.123rf.com/images/lovecta/lovecta2004/lovecta200400004/144256143-live-stream-symbol-live-streaming-video-nachrichtensymbol-auf-transparentem-hintergrund-social-media.jpg"
                    title="Live videos"
                />
                <SidebarRow
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueHVU74zl2FCc2js9MHYLe2cME1H8M4kGJw&usqp=CAU"
                    title="Memories"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
                    title="Messenger"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
                    title="Messenger Kids"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
                    title="Most recent"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
                    title="Offers"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
                    title="Pages"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
                    title="Recent ad activity"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
                    title="Saved"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
                    title="Weather"
                />
            </div>
        </div>

    )
}

export default Sidebar
