const svgTable = {
    'box': "M88.728 100H11.27C5.043 100 0 94.957 0 88.73V11.274C0 5.048 5.043 0 11.27 0h77.458C94.954 0 100 5.048 100 11.274V88.73c0 6.227-5.046 11.27-11.272 11.27",

    // ages
    '15': "M36.876 15.482v68.651H21.509v-49.51h-5.484l7.097-19.141h13.754zm45.46 0V28.87H57.175v10.063h24.08c.845 0 1.533.687 1.533 1.534v42.13c0 .845-.688 1.532-1.534 1.532H43.616a1.533 1.533 0 01-1.533-1.533V62.202H57v8.988h10.874V52.052h-25.79v-36.57h40.254z",
    '18': "M81.473 15.482c.846 0 1.534.687 1.534 1.533v22.099c0 2.036-.283 3.563-.852 4.581-.568 1.02-1.542 1.947-2.918 2.784l-4.581 2.431 4.58 2.156c.777.417 1.424.834 1.93 1.254.51.42.917.931 1.215 1.528.298.6.507 1.32.626 2.157.12.84.182 1.858.182 3.058v23.533c0 .846-.686 1.533-1.533 1.533H43.21a1.536 1.536 0 01-1.535-1.533V59.063c0-2.218.255-3.896.763-5.036.51-1.135 1.538-2.127 3.1-2.961l4.582-2.156-4.581-2.43c-1.376-.838-2.35-1.778-2.92-2.832-.565-1.046-.855-2.563-.855-4.534V17.015c0-.846.688-1.533 1.534-1.533zm-45.008 0V84.13H21.103V34.62h-5.485l7.104-19.136h13.743zm29.913 39.176h-7.89c-.845 0-1.534.686-1.534 1.532v13.737c0 .846.689 1.534 1.535 1.534h7.89c.846 0 1.534-.688 1.534-1.534V56.19c0-.846-.688-1.532-1.535-1.532zm0-26.548h-7.89c-.845 0-1.534.686-1.534 1.532v12.014c0 .846.689 1.533 1.535 1.533h7.89c.846 0 1.534-.687 1.534-1.533V29.642c0-.846-.688-1.532-1.535-1.532z",

    // functional
    'play': "M5 2.69127 C5 1.93067 5.81547 1.44851 6.48192 1.81506 L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762 L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087 V2.69127z",
    'replay': "M20.6625 7C18.9328 4.00995 15.7002 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H24C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C16.1752 0 19.8508 2.13204 22 5.36482V2H24V8C24 8.55228 23.5523 9 23 9H17V7H20.6625Z",
    'audio-toggle-unmuted': "M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z",
    'audio-toggle-muted': "M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z",

    // icons
    'topic': "M74.21 47.67c3.437-4.279 5.495-9.563 5.495-15.306 0-14.205-12.428-25.718-27.76-25.718-13.074 0-24.006 8.38-26.954 19.65l-.028.01-4.59 18.54c-.238.956.533 1.87 1.59 1.898l4.65.11v9.286c-.004 2.075 1.796 3.757 4.035 3.794l5.373.059c1.337.02 2.459.932 2.653 2.158v5.867s0 5.424 15.281 5.424c14.529 0 15.327-5.424 15.327-5.424s-.354-13.119 4.95-20.322l-.021-.026zM52.06 63.037c-1.84 0-3.328-1.38-3.328-3.087 0-1.709 1.488-3.09 3.328-3.09 1.842 0 3.336 1.381 3.336 3.09 0 1.706-1.494 3.087-3.336 3.087zM66.47 36.22c-1.017 1.86-2.625 3.534-4.772 4.976-2.067 1.386-6.875 5.11-6.875 9.668 0 1.417-1.233 2.56-2.762 2.56-1.523 0-2.759-1.143-2.759-2.56 0-6.665 5.74-11.51 9.157-13.808 1.43-.965 2.473-2.025 3.091-3.15a9.246 9.246 0 001.096-5.379c-.443-4.548-4.466-8.355-9.36-8.853-3.075-.326-6.025.55-8.308 2.443-2.25 1.867-3.543 4.542-3.543 7.34 0 1.41-1.233 2.555-2.76 2.555-1.524 0-2.76-1.144-2.76-2.555 0-4.248 1.963-8.316 5.38-11.147 3.41-2.837 8.004-4.2 12.597-3.724 7.571.774 13.564 6.443 14.252 13.474a14.003 14.003 0 01-1.674 8.16z",
    'drug': "M18.377 67.77s4.396 4.505 4.38 8.049a4.417 4.417 0 01-4.448 4.394 4.421 4.421 0 01-4.396-4.443c.022-3.539 4.464-8 4.464-8zm42.154-50.333c1.794-1.528 6.688 1.269 10.938 6.25 4.247 4.977 6.237 10.26 4.443 11.785-1.012.863-3.022.309-5.336-1.196L46.01 55.227a.9.9 0 01-.648.214l-.336-.1a17.79 17.79 0 01-2.272-1.4l-6.302 5.377a.91.91 0 01-.656.21l-.333-.092c-.905-.464-1.7-1.096-2.421-1.804l-9.161 7.816a.92.92 0 01-.656.213.906.906 0 01-.61-.313.892.892 0 01.104-1.262l9.166-7.814c-.589-.823-1.086-1.705-1.398-2.675a.897.897 0 01.265-.958l6.306-5.373a17.987 17.987 0 01-1.026-2.464.891.891 0 01.274-.957L60.87 22.892c-1.126-2.52-1.355-4.593-.339-5.455zM47.132 38.806L39.86 45.01a19.884 19.884 0 002.429 3.565 20.11 20.11 0 003.131 2.96l7.273-6.205-5.56-6.524zm5.95-4.676a.894.894 0 00-1.36 1.163l2.646 3.1a.888.888 0 00.61.312.92.92 0 00.657-.21.896.896 0 00.094-1.257zm3.938-3.355a.897.897 0 00-1.262-.1.888.888 0 00-.099 1.26l2.646 3.102c.158.19.384.295.607.311a.89.89 0 00.752-1.469zm3.93-3.358a.89.89 0 00-1.258-.1.896.896 0 00-.1 1.262l2.644 3.104a.893.893 0 001.262.099.889.889 0 00.1-1.257zm13.289-17.03c1.255-1.075 4.695.89 7.676 4.389 2.985 3.495 4.38 7.2 3.125 8.273-.84.72-2.655.062-4.655-1.485l-4.538 3.869a20.341 20.341 0 00-2.394-3.44 19.983 19.983 0 00-3.02-2.906l4.539-3.87c-1.212-2.22-1.576-4.115-.733-4.83z",
    'sexuality': "M66.849 39.06V18.44l6.001 5.913c.023.02.047.023.067.042l4.44 4.373a2.386 2.386 0 003.342 0 2.3 2.3 0 000-3.286L65.174 10.187a.927.927 0 00-.65-.268c-.005 0-.009.003-.012.003-.004 0-.008-.003-.01-.003-.004 0-.008.003-.011.003-.008 0-.011-.003-.014-.003a.919.919 0 00-.65.268L51.21 22.614c-1.662-7.214-8.214-12.62-16.032-12.62-9.075 0-16.455 7.271-16.455 16.213 0 8.147 6.137 14.89 14.094 16.026v10.453H19.938c-1.304 0-2.361 1.046-2.361 2.328 0 1.279 1.057 2.325 2.361 2.325h12.879v11.633c0 1.281 1.058 2.324 2.361 2.324 1.302 0 2.361-1.043 2.361-2.324V57.34h10.676c1.115 7.875 7.978 13.957 16.276 13.957 9.071 0 16.451-7.273 16.451-16.214 0-8.147-6.137-14.893-14.093-16.022m9.347 16.022c0 6.362-5.249 11.536-11.705 11.536-6.46 0-11.708-5.174-11.708-11.536 0-6.355 5.248-11.536 11.708-11.536 6.456 0 11.705 5.181 11.705 11.536M35.178 14.669c6.456 0 11.706 5.179 11.706 11.538 0 6.36-5.25 11.536-11.706 11.536-6.456 0-11.708-5.176-11.708-11.536 0-6.36 5.252-11.538 11.708-11.538m16.185 14.372L62.13 18.439V39.06c-7.16 1.016-12.832 6.582-13.894 13.626H37.539V42.233c7.009-1 12.593-6.355 13.824-13.192z",
    'circleI': "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z",
};

export function getSvgPath(id){
    if (id in svgTable){
        return svgTable[id];
    }
    else{
        console.log(`ID(${id}) not exists.`);
        return '';
    }    
}