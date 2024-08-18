// place files you want to import through the `$lib` alias in this folder.

export const link = {
    li: "https://www.linkedin.com/in/jedtomanan/",
    gh: "https://github.com/HoweZae",
    fb: "https://www.facebook.com/jedtomanan/",
    ig: "https://www.instagram.com/jose.tmnn/",
    twt: "https://x.com/howe_zae",
    resume: "https://flowcv.com/resume/hsjhe4q16a"
}

export const header = [
    {logo: "/logo/li.png", color: "hover:from-cyan-100 hover:to-cyan-300", link: link.li, handle: "jedtomanan"},
    {logo: "/logo/gh.svg", color: "hover:from-purple-100 hover:to-purple-300", link: link.gh, handle: "HoweZae"},
    {logo: "/logo/fb.png", color: "hover:from-blue-100 hover:to-blue-300", link: link.fb, handle: "jedtomanan"},
    {logo: "/logo/ig.png", color: "hover:from-red-50 hover:to-red-200", link: link.ig, handle: "jose.tmnn"},
    {logo: "/logo/twt.png", color: "hover:from-sky-50 hover:to-sky-200", link: link.twt, handle: "howe_zae"},
]

/**
 * @param {string} id
 */
export function linkClicked(id) {
    console.log("Link clicked...");

    if (id != null) {
        const link = document.getElementById(id);
        // @ts-ignore
        link.classList.add("text-violet-800", "underline");
    }
}

export function buttonHover() {
    console.log("Hovering on button...");
}

/**
 * @param {string} name
 * @param {string} email
 * @param {string} message
 */
export function submitForm(name, email, message) {
    alert(`Submitted ${name}, ${email} with message: ${message}`);
}