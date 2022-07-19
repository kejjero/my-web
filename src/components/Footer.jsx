import {useLocation} from "react-router";

function Footer() {
    const location = useLocation();

    return (
        location.pathname !== '/' &&
        <footer className="footer">
            <div className="footer__network">
                <span className="line">
                </span>
                <ul>
                    <li>
                        <a href="#" target="_blank">
                            <svg width="25" height="25" viewBox="-1 0 15 15"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.65021 12.4769C5.9136 12.3939 6.05986 12.1132 5.9769 11.8498C5.89394 11.5864 5.61317 11.4401 5.34979 11.5231L5.65021 12.4769ZM2.00197 9.51639L1.51836 9.38942L1.26442 10.3566L1.74803 10.4836L2.00197 9.51639ZM9 14.5V15H10V14.5H9ZM9.0625 9.6875L9.00906 9.19036C8.81734 9.21097 8.65455 9.33999 8.5907 9.52194C8.52686 9.70389 8.57333 9.90634 8.71013 10.0422L9.0625 9.6875ZM12.5 5.9125H13L13 5.91089L12.5 5.9125ZM11.6669 3.90625L11.2008 3.72524C11.1291 3.90974 11.1731 4.11914 11.3128 4.2593L11.6669 3.90625ZM11.6169 1.88937L12.0734 1.68549C12.0132 1.55057 11.8963 1.44921 11.7542 1.40861L11.6169 1.88937ZM9.44438 2.68125L9.31826 3.16508C9.45382 3.20042 9.59799 3.17726 9.71566 3.10125L9.44438 2.68125ZM5.55562 2.68125L5.28442 3.1013C5.40208 3.17727 5.54621 3.20041 5.68174 3.16508L5.55562 2.68125ZM3.38313 1.88937L3.24564 1.40865C3.10362 1.44926 2.98682 1.55061 2.92658 1.68549L3.38313 1.88937ZM3.33313 3.90625L3.68715 4.25933C3.82693 4.11917 3.87087 3.90975 3.79921 3.72524L3.33313 3.90625ZM2.5 5.92875H3L3 5.92747L2.5 5.92875ZM5.9375 9.6875L6.29045 10.0417C6.42616 9.9064 6.47265 9.7055 6.41015 9.52439C6.34765 9.34328 6.18715 9.21381 5.99691 9.19104L5.9375 9.6875ZM5.5 11H6C6 10.9878 5.99955 10.9756 5.99866 10.9634L5.5 11ZM5 14.5V15H6V14.5H5ZM5.34979 11.5231C4.74678 11.713 4.3643 11.6918 4.11084 11.6082C3.85886 11.525 3.66567 11.3578 3.4814 11.1175C3.38808 10.9959 3.3021 10.8623 3.21181 10.7161C3.12597 10.5771 3.02879 10.4142 2.93047 10.2692C2.73966 9.9878 2.45815 9.63616 2.00197 9.51639L1.74803 10.4836C1.82748 10.5045 1.93206 10.5786 2.10281 10.8304C2.18527 10.952 2.26274 11.0825 2.36104 11.2417C2.4549 11.3936 2.56254 11.5627 2.68797 11.7262C2.9412 12.0563 3.28599 12.389 3.79744 12.5578C4.30742 12.7261 4.91384 12.7088 5.65021 12.4769L5.34979 11.5231ZM10 10.9375C10 10.6201 9.98611 10.3301 9.89602 10.0596C9.8001 9.77159 9.63428 9.55071 9.41487 9.33276L8.71013 10.0422C8.8651 10.1962 8.91802 10.2878 8.94726 10.3756C8.98232 10.4809 9 10.6299 9 10.9375H10ZM9.11594 10.1846C10.0189 10.0876 11.004 9.85986 11.7626 9.20319C12.5429 8.52773 13 7.47445 13 5.9125H12C12 7.2718 11.6105 8.01226 11.1081 8.44712C10.5841 8.90076 9.8505 9.09992 9.00906 9.19036L9.11594 10.1846ZM13 5.91089C12.9971 5.02667 12.6453 4.17934 12.0209 3.5532L11.3128 4.2593C11.751 4.69877 11.998 5.29349 12 5.91411L13 5.91089ZM12.133 4.08726C12.2823 3.70286 12.3539 3.29267 12.3436 2.88041L11.3439 2.9052C11.3509 3.18532 11.3022 3.46404 11.2008 3.72524L12.133 4.08726ZM12.3436 2.88041C12.3334 2.46816 12.2416 2.06202 12.0734 1.68549L11.1603 2.09326C11.2746 2.34911 11.337 2.62508 11.3439 2.9052L12.3436 2.88041ZM11.6169 1.88937C11.7542 1.40861 11.7538 1.40848 11.7533 1.40834C11.7531 1.4083 11.7527 1.40816 11.7523 1.40807C11.7517 1.40789 11.751 1.40771 11.7504 1.40752C11.749 1.40716 11.7477 1.40678 11.7462 1.4064C11.7434 1.40564 11.7404 1.40485 11.7372 1.40405C11.7309 1.40245 11.7239 1.40078 11.7161 1.39909C11.7007 1.39571 11.6826 1.39225 11.6617 1.38904C11.6199 1.38261 11.5674 1.37725 11.504 1.37556C11.3769 1.37216 11.2079 1.38354 10.9947 1.42908C10.5691 1.52001 9.97001 1.7465 9.17309 2.26125L9.71566 3.10125C10.435 2.63663 10.9221 2.46717 11.2037 2.40701C11.3441 2.37701 11.434 2.37404 11.4773 2.3752C11.4991 2.37578 11.5097 2.37742 11.5097 2.37742C11.5098 2.37743 11.5072 2.37704 11.5021 2.37592C11.4996 2.37537 11.4964 2.37463 11.4927 2.37368C11.4908 2.3732 11.4887 2.37267 11.4865 2.37209C11.4854 2.37179 11.4843 2.37148 11.4831 2.37116C11.4826 2.37099 11.482 2.37083 11.4814 2.37066C11.4811 2.37057 11.4806 2.37044 11.4804 2.3704C11.48 2.37027 11.4795 2.37014 11.6169 1.88937ZM9.57049 2.19742C8.21284 1.84354 6.78716 1.84354 5.42951 2.19742L5.68174 3.16508C6.87399 2.85431 8.12601 2.85431 9.31826 3.16508L9.57049 2.19742ZM5.82683 2.2612C5.02965 1.74649 4.43054 1.52002 4.00504 1.42909C3.79191 1.38354 3.62298 1.37216 3.49591 1.37556C3.4325 1.37725 3.38003 1.38261 3.33822 1.38905C3.31734 1.39226 3.2992 1.39573 3.28376 1.39911C3.27604 1.4008 3.26901 1.40247 3.26266 1.40408C3.25948 1.40488 3.25647 1.40567 3.25364 1.40643C3.25222 1.40681 3.25085 1.40719 3.24951 1.40756C3.24885 1.40774 3.24819 1.40793 3.24755 1.40811C3.24722 1.4082 3.24675 1.40833 3.24659 1.40838C3.24611 1.40851 3.24564 1.40865 3.38313 1.88937C3.52061 2.3701 3.52014 2.37023 3.51968 2.37037C3.51953 2.37041 3.51907 2.37054 3.51876 2.37062C3.51816 2.3708 3.51756 2.37096 3.51698 2.37112C3.51581 2.37145 3.51467 2.37176 3.51357 2.37206C3.51138 2.37265 3.50934 2.37318 3.50745 2.37365C3.50367 2.37461 3.5005 2.37535 3.49795 2.3759C3.49286 2.37702 3.49028 2.37742 3.49029 2.37742C3.4903 2.37741 3.49295 2.37701 3.49829 2.37653C3.50363 2.37605 3.51172 2.37549 3.52262 2.3752C3.56589 2.37405 3.65567 2.377 3.79606 2.40701C4.07758 2.46717 4.56473 2.63664 5.28442 3.1013L5.82683 2.2612ZM2.92658 1.68549C2.75843 2.06202 2.66658 2.46816 2.65636 2.88041L3.65606 2.9052C3.663 2.62508 3.72541 2.34911 3.83967 2.09326L2.92658 1.68549ZM2.65636 2.88041C2.64614 3.29267 2.71775 3.70286 2.86704 4.08726L3.79921 3.72524C3.69777 3.46404 3.64911 3.18532 3.65606 2.9052L2.65636 2.88041ZM2.9791 3.55317C2.66761 3.8655 2.42079 4.23621 2.25278 4.64407L3.1774 5.02495C3.29532 4.7387 3.46854 4.47853 3.68715 4.25933L2.9791 3.55317ZM2.25278 4.64407C2.08477 5.05193 1.99887 5.48892 2 5.93003L3 5.92747C2.99921 5.61789 3.05949 5.31119 3.1774 5.02495L2.25278 4.64407ZM2 5.92875C2 7.48166 2.45806 8.52573 3.23874 9.19657C3.99602 9.84729 4.97941 10.0764 5.87809 10.184L5.99691 9.19104C5.15121 9.08984 4.41586 8.88958 3.89048 8.43812C3.3885 8.00677 3 7.27584 3 5.92875H2ZM5.58455 9.33335C5.08499 9.83121 4.95633 10.4236 5.00134 11.0366L5.99866 10.9634C5.96867 10.5551 6.05126 10.28 6.29045 10.0417L5.58455 9.33335ZM5 11V14.5H6V11H5ZM10 14.5V13H9V14.5H10ZM10 13V10.9375H9V13H10Z"
                                    fill="#4B98F2" fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"
                                    fill="#4B98F2" fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <svg width="25" height="25" viewBox="-2 1 25 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.469a3.334 3.334 0 1 1 0-6.668 3.334 3.334 0 0 1 0 6.668Z"
                                    fill="#4B98F2" fillOpacity="0.3"/>
                                <path
                                    d="M21.94 7.877a7.334 7.334 0 0 0-.465-2.427 4.92 4.92 0 0 0-1.153-1.772 4.894 4.894 0 0 0-1.77-1.153 7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2c-2.715 0-3.057.011-4.123.06-.83.017-1.65.174-2.428.465A4.905 4.905 0 0 0 3.68 3.678c-.51.5-.903 1.104-1.154 1.772a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.056.06 4.123c.016.83.173 1.65.464 2.427.251.668.645 1.272 1.154 1.771.5.509 1.104.902 1.771 1.154a7.337 7.337 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22c2.716 0 3.057-.011 4.123-.06a7.33 7.33 0 0 0 2.427-.465 5.111 5.111 0 0 0 2.925-2.925 7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.547 5.547 0 0 1-.343 1.857 3.31 3.31 0 0 1-1.898 1.898 5.52 5.52 0 0 1-1.858.344c-1.054.048-1.37.058-4.04.058-2.671 0-2.987-.01-4.04-.058a5.524 5.524 0 0 1-1.858-.344 3.106 3.106 0 0 1-1.15-.748 3.085 3.085 0 0 1-.748-1.15 5.52 5.52 0 0 1-.344-1.857c-.049-1.054-.058-1.37-.058-4.04 0-2.671.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857c.16-.434.416-.827.748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8c2.67 0 2.986.011 4.041.059a5.564 5.564 0 0 1 1.858.344 3.31 3.31 0 0 1 1.898 1.898c.22.595.337 1.223.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.041Z"
                                    fill="#4B98F2" fillOpacity="0.3"/>
                                <path d="M17.339 5.462a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" fill="black"
                                      fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.405 16.865C22.8611 15.7695 22.1444 14.7688 21.2825 13.9013C20.9892 13.5603 20.6453 13.2238 20.3768 12.9612L20.3393 12.9245C20.2008 12.7889 20.0864 12.6764 19.9928 12.5795C21.1713 10.9407 22.18 9.18595 23.003 7.34222L23.0362 7.26783L23.0595 7.18976C23.1676 6.82687 23.2922 6.1368 22.8515 5.51317C22.396 4.86859 21.6666 4.75234 21.1782 4.75234H18.9311C18.4627 4.73087 17.9988 4.85751 17.6058 5.11498C17.2098 5.37439 16.9069 5.75278 16.7402 6.1951C16.2563 7.34779 15.6508 8.4442 14.9347 9.46598V6.83269C14.9347 6.4923 14.9027 5.92289 14.5382 5.44229C14.1018 4.86685 13.4707 4.75234 13.0326 4.75234H9.46708C9.00771 4.74172 8.56094 4.90597 8.2176 5.21259C7.866 5.52659 7.65052 5.96521 7.61687 6.43543L7.61369 6.47997V6.52463C7.61369 7.01011 7.80606 7.36822 7.95975 7.59344C8.02856 7.69427 8.10216 7.78606 8.14865 7.84403L8.15938 7.85741C8.20895 7.91923 8.24204 7.96049 8.27525 8.00566C8.3626 8.12448 8.48824 8.30768 8.52379 8.78174V10.2547C7.9091 9.24423 7.26066 7.89957 6.77276 6.46344L6.76527 6.4414L6.75697 6.41965C6.63532 6.10103 6.4402 5.63743 6.04941 5.28266C5.59288 4.86821 5.0529 4.75234 4.56182 4.75234H2.28187C1.78506 4.75234 1.18613 4.86857 0.739237 5.33999C0.299773 5.80358 0.25 6.35907 0.25 6.65442V6.78755L0.278039 6.91769C0.909544 9.84881 2.21076 12.5937 4.07946 14.9377C4.92668 16.2737 6.07468 17.3936 7.43213 18.2075C8.81124 19.0345 10.3671 19.5219 11.9715 19.6297L12.0133 19.6325H12.0553C12.7811 19.6325 13.5378 19.5699 14.1068 19.1907C14.8744 18.6792 14.9347 17.8936 14.9347 17.5021V16.3642C15.1317 16.5234 15.3761 16.7378 15.6753 17.0259C16.037 17.3879 16.325 17.7016 16.572 17.9754L16.7038 18.122L16.7046 18.1228C16.8964 18.3364 17.0852 18.5467 17.2571 18.7195C17.4732 18.9367 17.7396 19.1761 18.0745 19.3529C18.4371 19.5444 18.8177 19.631 19.222 19.631H21.5035C21.9841 19.631 22.6735 19.5173 23.1582 18.9554C23.6864 18.343 23.6461 17.5924 23.48 17.053L23.4501 16.956L23.405 16.865ZM17.6857 16.9706C17.4289 16.6859 17.1192 16.3484 16.7278 15.9571L16.7246 15.9539C15.3685 14.6464 14.7348 14.4186 14.2868 14.4186C14.0485 14.4186 13.7848 14.4454 13.6137 14.6585C13.5329 14.7591 13.4905 14.8805 13.4667 15.007C13.4429 15.1333 13.4347 15.2816 13.4347 15.4505V17.5021C13.4347 17.7569 13.3928 17.8639 13.275 17.9425C13.118 18.0471 12.7825 18.1319 12.0637 18.1325C10.6993 18.0395 9.37641 17.6244 8.20349 16.9211C7.02817 16.2164 6.03709 15.2425 5.31187 14.0797L5.30398 14.0671L5.29464 14.0554C3.55337 11.8881 2.34003 9.34571 1.7503 6.6291C1.7535 6.49814 1.78187 6.42045 1.82784 6.37195C1.87521 6.32198 1.98999 6.25234 2.28187 6.25234H4.56182C4.81544 6.25234 4.9467 6.30751 5.04117 6.39327C5.14827 6.4905 5.24116 6.65561 5.35401 6.95042C5.91362 8.5964 6.67038 10.1357 7.387 11.2675C7.74518 11.8332 8.09769 12.3041 8.41529 12.6368C8.57383 12.803 8.72932 12.9406 8.8777 13.0385C9.02132 13.1332 9.18414 13.2079 9.35158 13.2079C9.43994 13.2079 9.54328 13.1988 9.64279 13.1547C9.74983 13.1074 9.83291 13.0284 9.89158 12.9225C9.99536 12.7353 10.0238 12.458 10.0238 12.0947V8.73099L10.0233 8.7231C9.97146 7.90476 9.72439 7.44443 9.48381 7.11718C9.43108 7.04546 9.37909 6.98068 9.33359 6.92399L9.32113 6.90846C9.27117 6.84616 9.23142 6.79582 9.19876 6.74795C9.13891 6.66024 9.11571 6.59909 9.11381 6.53356C9.12162 6.45578 9.15828 6.38361 9.21675 6.33139C9.27744 6.27719 9.35686 6.24897 9.43816 6.25234H13.0326C13.2387 6.25234 13.3081 6.30262 13.343 6.34868C13.3923 6.4137 13.4347 6.54893 13.4347 6.83269V11.3613C13.4347 11.8992 13.6827 12.2634 14.0428 12.2634C14.4572 12.2634 14.7559 12.012 15.2783 11.4896L15.287 11.4809L15.2948 11.4713C16.4656 10.0436 17.4225 8.45298 18.1347 6.74943L18.1392 6.73666C18.1928 6.58613 18.2941 6.45726 18.4278 6.3697C18.5614 6.28215 18.72 6.24072 18.8794 6.25175L18.8881 6.25234H21.1782C21.4905 6.25234 21.5933 6.33183 21.6265 6.37884C21.6618 6.42885 21.6864 6.53604 21.6264 6.74625C20.8053 8.58266 19.7899 10.3258 18.598 11.9464L18.5905 11.9578C18.4748 12.1348 18.3479 12.3306 18.3295 12.5554C18.3098 12.7968 18.4143 13.0163 18.597 13.2515C18.7302 13.4484 19.0049 13.7173 19.2836 13.9901L19.3099 14.0158C19.6021 14.3018 19.9186 14.6116 20.1727 14.9116L20.1795 14.9195L20.1869 14.9269C20.9444 15.6825 21.5743 16.556 22.052 17.5132C22.1283 17.7738 22.0816 17.907 22.0223 17.9757C21.953 18.0561 21.7976 18.131 21.5035 18.131H19.222C19.0438 18.131 18.9063 18.0959 18.7749 18.0265C18.638 17.9542 18.4972 17.8392 18.3206 17.6617C18.1784 17.5187 18.023 17.3457 17.8334 17.1348C17.7864 17.0825 17.7373 17.0277 17.6857 16.9706Z"
                                    fill="#4B98F2" fillOpacity="0.3"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            {
                window.screen.width > 550 ?
                    <div className="footer__mail">
                        <span className="line"></span>
                        <em>kejeroarts@yandex.ru</em>
                    </div>
                    : <p className="footer__copy"><span style={{fontSize: '18px'}}>©</span> kejero.pw</p>
            }
        </footer>
    )
}

export default Footer;


