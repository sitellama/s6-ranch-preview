import { HTMLAttributes, useMemo } from "react";
import { marked } from "marked";
import { classNames } from "../../utils";
import './markdown.css';
//![image](./src/assets/img/horse-2.webp)
const CODE_ORG = 
`#### version 3.0.364 <span class="date">11.28.2018</span>

<table>
    <tr>
        <th>Browser</th>
        <th>Version</th>
    </tr>
    <tr>
        <td>
            <a href="https://www.google.com/chrome/" target="_blank">
                <img src="./src/assets/img/horse-2.webp" alt="black and white colored tornjak" class="w-24 h-24" />
            </a>
        </td>

        <td><img src="./src/assets/img/horse-2.webp" alt="black and white colored tornjak" class="w-24 h-24" /></td>
    </tr>
</table>

* <img src="./src/assets/img/horse-2.webp" alt="black and white colored tornjak" class="w-24 h-24" />
* <img src="./src/assets/img/horse-2.webp" alt="black and white colored tornjak" class="w-24 h-24" />





* Fixed bug [57856](http://dp-tfs:8080/tfs/DefaultCollection/Prime/_workitems?id=57856) - Bug 57856 - New PM icon appears to be too big and not right aligned on some logon pages using FF/Chrome. Updated the feedback icon positioning algorithm and size determination.
* Optimized the URL match queries during page update. Bug [57575](http://dp-tfs:8080/tfs/DefaultCollection/Prime/_workitems?id=57575) (Firefox Plugin, cant identify web page) fixing in progress.

#### version 3.0.348 <span class="date">11.04.2018</span>

* Fixed bug [57699](http://dp-tfs:8080/tfs/DefaultCollection/Prime/_workitems?id=57699) - PM icon will appear unexpectedly on vSphere
* Fixed bug [57701](http://dp-tfs:8080/tfs/DefaultCollection/Prime/_workitems?id=57701) - nordstrom.com sign-up icons
* Fixed double icon removal and icon placement.
* Focus/blur when menu activated/deactivated.

#### version 3.0.341 <span class="date">11.03.2018</span>

Added double icon removal and fixed icon placement next to the input field instead of appending to the input parent.

#### version 3.0.327 <span class="date">11.02.2018</span>

PM will hide the Chrome browser popup menu for the user name field when mouse is over the DP feedback icon.

#### version 3.0.316 <span class="date">11.01.2018</span>

* Fixed bug [57691](http://dp-tfs:8080/tfs/DefaultCollection/Prime/_workitems?id=57691) - website [srbjiwc6.behaviosec.com](https://srbjiwc6.behaviosec.com/BehavioSenseDashboard/index.jsp) DP icon is floating over another field.
* Updated feedback icons and feedback menu styles.
* Added feedback icon update on the browser window resize event.
`

export function HighlightMdDemo({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const markedText = useMemo(() => {
        return marked(CODE_ORG);
    }, []);
    return (
        <div className={classNames("text-xs bg-background", className)} {...rest}>
            <div className="notes max-h-96 px-4 bg-background overflow-y-auto smallscroll" dangerouslySetInnerHTML={{ __html: markedText }} />
        </div>
    );
}