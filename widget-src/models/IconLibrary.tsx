export function iconLibrary (svg: IconName, fill: string): string {
    
    switch (svg) {
        case 'logo':
            return `
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9284 11.3022C11.9892 17.2414 11.547 26.596 16.6017 33.0438C17.1058 33.6082 17.0816 34.468 16.5465 35.0031L12.557 38.9925C11.776 39.7736 11.77 41.052 12.6393 41.7334C19.0871 46.7882 28.4417 46.346 34.3809 40.4067C39.6227 35.165 40.5827 27.2629 37.261 21.0466L29.47 28.6439C28.6993 29.3955 27.4674 29.3875 26.7065 28.6259L20.4432 22.3575C19.646 21.5595 19.646 20.2665 20.4432 19.4686C21.2415 18.6697 22.5363 18.6697 23.3345 19.4686L28.0794 24.2174L39.7898 12.678C40.5334 11.894 40.5253 10.6459 39.6701 9.97546C33.2223 4.92072 23.8677 5.36295 17.9284 11.3022Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'bolt':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.042 11.1183L15.5645 2.21465C15.9558 1.88356 16.5325 2.2855 16.3574 2.76721L13 12H17.635C18.1008 12 18.3136 12.5808 17.958 12.8817L7.43549 21.7854C7.0442 22.1164 6.46746 21.7145 6.64262 21.2328L10 12H5.36497C4.89919 12 4.68643 11.4192 5.042 11.1183Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'checklist':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 9C6.32843 9 7 8.32843 7 7.5C7 6.67157 6.32843 6 5.5 6C4.67157 6 4 6.67157 4 7.5C4 8.32843 4.67157 9 5.5 9ZM5.5 11C7.433 11 9 9.433 9 7.5C9 5.567 7.433 4 5.5 4C3.567 4 2 5.567 2 7.5C2 9.433 3.567 11 5.5 11Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18ZM5.5 20C7.433 20 9 18.433 9 16.5C9 14.567 7.433 13 5.5 13C3.567 13 2 14.567 2 16.5C2 18.433 3.567 20 5.5 20Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.5C10 6.94772 10.4477 6.5 11 6.5H21C21.5523 6.5 22 6.94772 22 7.5C22 8.05228 21.5523 8.5 21 8.5H11C10.4477 8.5 10 8.05228 10 7.5Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5C10 15.9477 10.4477 15.5 11 15.5H21C21.5523 15.5 22 15.9477 22 16.5C22 17.0523 21.5523 17.5 21 17.5H11C10.4477 17.5 10 17.0523 10 16.5Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'checkmark':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5832 5.18768C20.0318 5.50977 20.1344 6.13457 19.8123 6.58321L10.9069 18.9872C10.2903 19.8461 9.00237 19.8145 8.42854 18.9264L4.16008 12.3205C3.86035 11.8566 3.99341 11.2376 4.45728 10.9379C4.92116 10.6381 5.54018 10.7712 5.83991 11.2351L9.71017 17.2247L18.1877 5.41679C18.5098 4.96816 19.1346 4.86558 19.5832 5.18768Z" 
                fill="${fill}"/>
            </svg>            
            `
        case 'chevron.down':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 9.29289C4.68342 8.90237 5.31658 8.90237 5.70711 9.29289L12 15.5858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L13.0607 17.3536C12.4749 17.9393 11.5251 17.9393 10.9393 17.3536L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'chevron.up':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 6.64645C11.5251 6.06066 12.4749 6.06066 13.0607 6.64645L19.7071 13.2929C20.0976 13.6834 20.0976 14.3166 19.7071 14.7071C19.3166 15.0976 18.6834 15.0976 18.2929 14.7071L12 8.41421L5.70711 14.7071C5.31658 15.0976 4.68342 15.0976 4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929L10.9393 6.64645Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'ellipsis':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 12C13 12.8284 12.3284 13.5 11.5 13.5C10.6716 13.5 10 12.8284 10 12C10 11.1716 10.6716 10.5 11.5 10.5C12.3284 10.5 13 11.1716 13 12Z" 
                fill="${fill}"/>
                <path d="M19 12C19 12.8284 18.3284 13.5 17.5 13.5C16.6716 13.5 16 12.8284 16 12C16 11.1716 16.6716 10.5 17.5 10.5C18.3284 10.5 19 11.1716 19 12Z" 
                fill="${fill}"/>
                <path d="M7 12C7 12.8284 6.32843 13.5 5.5 13.5C4.67157 13.5 4 12.8284 4 12C4 11.1716 4.67157 10.5 5.5 10.5C6.32843 10.5 7 11.1716 7 12Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'eye':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 11.59 15.9383 11.1945 15.8238 10.8221C15.5102 11.5166 14.8115 12 14 12C12.8954 12 12 11.1046 12 10C12 9.18846 12.4834 8.48982 13.1779 8.17624C12.8055 8.06167 12.41 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5312 12C18.9112 11.2088 17.9707 10.1256 16.8209 9.16161C15.2771 7.86739 13.6094 7 12 7C10.3906 7 8.72288 7.86739 7.17914 9.16161C6.02931 10.1256 5.08879 11.2088 4.46883 12C5.08879 12.7912 6.02931 13.8744 7.17914 14.8384C8.72288 16.1326 10.3906 17 12 17C13.6094 17 15.2771 16.1326 16.8209 14.8384C17.9707 13.8744 18.9112 12.7912 19.5312 12ZM21.6394 12.5233C21.867 12.2067 21.867 11.7933 21.6394 11.4767C20.471 9.85166 16.5979 5 12 5C7.4021 5 3.52897 9.85166 2.36061 11.4767C2.13299 11.7933 2.13299 12.2067 2.36061 12.5233C3.52897 14.1483 7.4021 19 12 19C16.5979 19 20.471 14.1483 21.6394 12.5233Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'eye.cross':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08237 18.2929C3.69184 18.6834 3.69184 19.3166 4.08237 19.7071C4.47289 20.0976 5.10606 20.0976 5.49658 19.7071L7.59556 17.6081C8.92443 18.4267 10.4194 19 12 19C16.5979 19 20.471 14.1483 21.6394 12.5233C21.867 12.2067 21.867 11.7933 21.6394 11.4767C21.022 10.6181 19.6495 8.85848 17.8139 7.38983L19.7071 5.49658C20.0976 5.10606 20.0976 4.47289 19.7071 4.08237C19.3166 3.69184 18.6834 3.69184 18.2929 4.08237L4.08237 18.2929ZM16.3897 8.81398L13.3217 11.882C13.5335 11.9584 13.7619 12 14 12C14.8115 12 15.5102 11.5166 15.8238 10.8221C15.9383 11.1945 16 11.59 16 12C16 14.2091 14.2091 16 12 16C11.2035 16 10.4613 15.7672 9.83784 15.3659L9.05741 16.1463C10.0327 16.683 11.027 17 12 17C13.6094 17 15.2771 16.1326 16.8209 14.8384C17.9707 13.8744 18.9112 12.7912 19.5312 12C18.9112 11.2088 17.9707 10.1256 16.8209 9.16161C16.6781 9.04197 16.5344 8.92598 16.3897 8.81398Z" 
                fill="${fill}"/>
                <path d="M8.06643 12.7299L12.7299 8.06644C12.4932 8.0228 12.2493 8 12 8C9.79086 8 8 9.79086 8 12C8 12.2493 8.0228 12.4932 8.06643 12.7299Z" 
                fill="${fill}"/>
                
                <path d="M12 7C12.5118 7 13.0295 7.08773 13.5473 7.24901L15.0969 5.69946C14.1218 5.26814 13.0809 5 12 5C7.4021 5 3.52897 9.85167 2.36061 11.4767C2.13299 11.7933 2.13299 12.2067 2.36061 12.5233C2.85126 13.2057 3.8189 14.4572 5.11691 15.6794L6.53182 14.2645C5.67504 13.4635 4.96802 12.637 4.46883 12C5.08879 11.2088 6.02931 10.1256 7.17914 9.16161C8.72288 7.86739 10.3906 7 12 7Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'info.circle':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z" 
                fill="${fill}"/>
                <path d="M10.5 11.5C10.5 10.6716 11.1716 10 12 10C12.8284 10 13.5 10.6716 13.5 11.5V17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5V11.5Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" 
                fill="${fill}"/>
            </svg>
            `

        case 'globe':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM11 15.9729V13H8.0271C8.07788 13.9306 8.19831 14.8115 8.37423 15.6258C9.18848 15.8017 10.0694 15.9221 11 15.9729ZM11 17.9755C10.3218 17.9422 9.6614 17.8753 9.02436 17.7779C9.17505 18.1523 9.3388 18.5008 9.51315 18.8205C10.0223 19.7539 10.54 20.3161 11 20.6352V17.9755ZM6.22211 14.9756C5.84768 14.825 5.49917 14.6612 5.17953 14.4868C4.24613 13.9777 3.68386 13.46 3.36484 13H6.02446C6.05779 13.6782 6.1247 14.3386 6.22211 14.9756ZM3.36484 11H6.02446C6.05779 10.3218 6.1247 9.6614 6.22211 9.02436C5.84768 9.17505 5.49917 9.3388 5.17953 9.51315C4.24613 10.0223 3.68386 10.54 3.36484 11ZM8.37423 8.37423C8.19831 9.18848 8.07788 10.0694 8.0271 11H11V8.0271C10.0694 8.07788 9.18848 8.19831 8.37423 8.37423ZM11 6.02446C10.3218 6.05779 9.6614 6.1247 9.02436 6.22211C9.17505 5.84768 9.3388 5.49917 9.51315 5.17953C10.0223 4.24613 10.54 3.68386 11 3.36484V6.02446ZM13 8.0271V11H15.9729C15.9221 10.0694 15.8017 9.18848 15.6258 8.37423C14.8115 8.19831 13.9306 8.07788 13 8.0271ZM14.9756 6.22211C14.3386 6.1247 13.6782 6.05779 13 6.02446V3.36484C13.46 3.68386 13.9777 4.24613 14.4868 5.17953C14.6612 5.49917 14.825 5.84768 14.9756 6.22211ZM17.7779 9.02436C17.8753 9.6614 17.9422 10.3218 17.9755 11H20.6352C20.3161 10.54 19.7539 10.0223 18.8205 9.51315C18.5008 9.3388 18.1523 9.17505 17.7779 9.02436ZM20.0067 7.88575C19.2141 7.427 18.2904 7.03636 17.2684 6.73163C16.9636 5.70957 16.573 4.78592 16.1142 3.99332C17.7826 4.85232 19.1477 6.21743 20.0067 7.88575ZM20.6352 13H17.9755C17.9422 13.6782 17.8753 14.3386 17.7779 14.9756C18.1523 14.825 18.5008 14.6612 18.8205 14.4868C19.7539 13.9777 20.3161 13.46 20.6352 13ZM17.2684 17.2684C18.2904 16.9636 19.2141 16.573 20.0067 16.1142C19.1477 17.7826 17.7826 19.1477 16.1142 20.0067C16.573 19.2141 16.9636 18.2904 17.2684 17.2684ZM14.9756 17.7779C14.825 18.1523 14.6612 18.5008 14.4868 18.8205C13.9777 19.7539 13.46 20.3161 13 20.6352V17.9755C13.6782 17.9422 14.3386 17.8753 14.9756 17.7779ZM15.6258 15.6258C14.8115 15.8017 13.9306 15.9221 13 15.9729V13H15.9729C15.9221 13.9306 15.8017 14.8115 15.6258 15.6258ZM3.99332 7.88575C4.85232 6.21743 6.21743 4.85232 7.88575 3.99332C7.427 4.78592 7.03636 5.70957 6.73163 6.73163C5.70957 7.03636 4.78592 7.427 3.99332 7.88575ZM6.73163 17.2684C7.03636 18.2904 7.427 19.2141 7.88575 20.0067C6.21743 19.1477 4.85232 17.7826 3.99332 16.1142C4.78592 16.573 5.70957 16.9636 6.73163 17.2684Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'lines.3':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 6C21 6.55229 20.5523 7 20 7L4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5L20 5C20.5523 5 21 5.44772 21 6Z" 
                fill="${fill}"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 18C21 18.5523 20.5523 19 20 19L4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17L20 17C20.5523 17 21 17.4477 21 18Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'logo.github':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.05039 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'plus':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'slider':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20L7 13.7324C7.5978 13.3866 8 12.7403 8 12C8 11.2597 7.5978 10.6134 7 10.2676L7 4C7 3.44772 6.55229 3 6 3C5.44772 3 5 3.44772 5 4L5 10.2676C4.4022 10.6134 4 11.2597 4 12C4 12.7403 4.4022 13.3866 5 13.7324L5 20Z" 
                fill="${fill}"/>
                <path d="M12 21C11.4477 21 11 20.5523 11 20L11 9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.25972 10.4022 6.61337 11 6.26756V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V6.26757C13.5978 6.61337 14 7.25972 14 8C14 8.74028 13.5978 9.38663 13 9.73243L13 20C13 20.5523 12.5523 21 12 21Z" 
                fill="${fill}"/>
                <path d="M18 21C17.4477 21 17 20.5523 17 20V17.7324C16.4022 17.3866 16 16.7403 16 16C16 15.2597 16.4022 14.6134 17 14.2676L17 4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4L19 14.2676C19.5978 14.6134 20 15.2597 20 16C20 16.7403 19.5978 17.3866 19 17.7324V20C19 20.5523 18.5523 21 18 21Z" 
                fill="${fill}"/>
            </svg>
            `
        case 'trash':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 8L18.0663 21.0712C18.029 21.5946 17.5935 22 17.0689 22H6.93112C6.40648 22 5.97104 21.5946 5.93366 21.0712L5 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19ZM15 4H9V6H15V4ZM16 20L17 8H7L8 20H16Z" 
                fill="${fill}"/>
            </svg>
            `

        case 'xmark':
            return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.2929C18.6834 3.90238 19.3166 3.90238 19.7071 4.2929C20.0976 4.68343 20.0976 5.31659 19.7071 5.70712L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" 
                fill="${fill}"/>
            </svg>
            `
    
        default:
            return ''
            break;
    }
    
}

export type IconName =
    | 'logo'
    | 'bolt'
    | 'checklist'
    | 'checkmark'
    | 'chevron.down'
    | 'chevron.up'
    | 'ellipsis'
    | 'eye'
    | 'eye.cross'
    | 'info.circle'
    | 'globe'
    | 'lines.3'
    | 'logo.github'
    | 'plus'
    | 'slider'
    | 'trash'
    | 'xmark'