import React from "react";
import icon from "../assets/image 8.png";
import FacebookIcon from "./FacebookSvg";
import TwitterIcon from "./TwitterSvg";
import InstagramIcon from "./InstagramSvg";
import LinkedlinIcon from "./LinkedlinSvg";
import YoutubeIcon from "./YoutubeSvg";
import TelegramIcon from "./TelegramSvg";

const Footer = () => {
  const footerIcons = [
    <FacebookIcon />,
    <TwitterIcon />,
    <InstagramIcon />,
    <LinkedlinIcon />,
    <YoutubeIcon />,
    <TelegramIcon />,
  ];

  const contentArray1 = [
    {
      tittle: "Lorem ipsum dolor",
      content: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    },
  ];
  const contentArray2 = [
    {
      tittle: "Lorem ipsum dolor",
      content: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    },
  ];
  const contentArray3 = [
    {
      tittle: "Lorem ipsum dolor",
      content: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    },
  ];
  const contentArray4 = [
    {
      tittle: "Lorem ipsum dolor",
      content: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    },
  ];
  const contentArray5 = [
    {
      tittle: "Lorem ipsum dolor",
      content: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
    },
  ];
  const contentArray6 = [
    {
      tittle: "Lorem ipsum dolor",
      content: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    },
  ];
  return (
    <div className="m-3">
      <hr className=" border-b-2 border-[#52B5B6] my-5 opacity-35" />

      <div className="footerShadow p-8 font-mont">
        <div className="bg-[#FFFFFF] grid lg:grid-cols-[0.3fr_0.7fr] grid-cols-1 lg:place-items-start place-items-center lg:gap-0 gap-5 ">
          <div className=" flex flex-col gap-5 items-center md:items-start">
            <img src={icon} width={151} height={42} alt="icon" />
            <div className=" flex flex-row gap-3">
              {footerIcons.map((item) => {
                return <div>{item}</div>;
              })}
            </div>
          </div>
          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 w-full">
            <div className="flex flex-col">
              {contentArray1.flatMap((cont) => {
                return (
                  <div className="flex flex-col">
                    <p className=" text-[#123676] text-base font-normal mb-3">
                      {cont.tittle}
                    </p>
                    {cont.content.map((desc) => {
                      return <p className="text-[14px]">{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              {contentArray2.flatMap((cont) => {
                return (
                  <div className="flex flex-col">
                    <p className=" text-[#123676] text-base font-normal mb-3">
                      {cont.tittle}
                    </p>
                    {cont.content.map((desc) => {
                      return <p className="text-[14px]">{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              {contentArray3.flatMap((cont) => {
                return (
                  <div className="flex flex-col">
                    <p className=" text-[#123676] text-base font-normal mb-3">
                      {cont.tittle}
                    </p>
                    {cont.content.map((desc) => {
                      return <p className="text-[14px]">{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              {contentArray4.flatMap((cont) => {
                return (
                  <div className="flex flex-col">
                    <p className=" text-[#123676] text-base font-normal mb-3">
                      {cont.tittle}
                    </p>
                    {cont.content.map((desc) => {
                      return <p className="text-[14px]">{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              {contentArray5.flatMap((cont) => {
                return (
                  <div className="flex flex-col">
                    <p className=" text-[#123676] text-base font-normal mb-3">
                      {cont.tittle}
                    </p>
                    {cont.content.map((desc) => {
                      return <p className="text-[14px]">{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col">
              {contentArray6.flatMap((cont) => {
                return (
                  <div className="flex flex-col">
                    <p className=" text-[#123676] text-base font-normal mb-3">
                      {cont.tittle}
                    </p>
                    {cont.content.map((desc) => {
                      return <p className="text-[14px]">{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className=" border-b-2 border-[#52B5B6] mt-5 opacity-35" />
        <div className="flex flex-col px-5 py-3 gap-5 text-justify font-normal">
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing est augue proin
            fermentum cras in aliquam. Quam hac est suspendisse nibh quisque at
            diam. Lacinia egestas id volutpat mauris. Sit sed elementum augue
            eget posuere commodo praesent lobortis feugiat. Ac ultricies dolor
            condimentum amet quisque commodo mauris pharetra elit. Hendrerit mi
            nisl turpis aliquet ultricies magna erat. Accumsan feugiat viverra
            posuere ac. Aenean cras donec sit pretium nam velit sed. Sed risus
            nec rhoncus eget eget commodo morbi sodales. Fermentum praesent est
            in ultricies sit neque iaculis. Accumsan lectus libero sed volutpat
            praesent amet vulputate purus. Lacus sed sagittis tincidunt molestie
            gravida. Tellus at leo lorem aenean rhoncus eu tempus cursus. Cursus
            pharetra nunc suscipit sed. Et dignissim ultricies gravida vitae
            amet mauris in augue nunc. Nunc aenean feugiat tincidunt tincidunt
            eu scelerisque eget volutpat. Diam etiam urna neque at. Fringilla
            pharetra amet massa lacinia consequat sem posuere. Tempus eget
            vivamus nibh sed elit. Sit integer at enim pulvinar nullam commodo.
            Lacus eget ut et sit cursus. Sapien massa ullamcorper commodo diam
            ut. Mollis nisi accumsan facilisis amet cras. At facilisis
            ullamcorper massa lectus iaculis aliquet sed diam nisl. Nunc in
            risus iaculis enim amet varius in lacus. Velit at pharetra orci quis
            aliquam. Turpis nulla sagittis nam in sagittis et erat. Vitae cursus
            aliquet curabitur maecenas justo purus. Placerat cras eu molestie et
            consequat massa curabitur fermentum imperdiet. Pellentesque proin
            viverra ante ultrices vulputate donec sit. Donec pulvinar enim
            egestas at. Pharetra quis mi aliquam netus at. Tristique accumsan
            amet morbi ipsum posuere turpis in at. Pellentesque volutpat tellus
            ultrices dui. Libero risus ultrices amet sagittis. Ac massa
            dignissim aliquam facilisis nisl sed imperdiet. Interdum ullamcorper
            netus laoreet eget magna. Elit tristique platea lacus duis eget at.
            Amet proin feugiat arcu varius. Odio aliquet quis et arcu lorem. Sed
            pharetra at velit vitae nunc et. Cras quis ut felis donec. Magna
            elementum tristique tellus in lectus netus ante. Eget amet viverra
            venenatis neque massa tortor. Semper lectus felis lacus volutpat
            commodo. Dictum odio posuere blandit vulputate id. Suspendisse
            feugiat odio suspendisse in. In ante ante mi scelerisque libero.
            Sagittis pellentesque mauris senectus vitae faucibus. Elementum
            faucibus tincidunt ac eget egestas. In adipiscing egestas nullam
            nullam mi eu sit diam. Suspendisse blandit a turpis tincidunt duis
            eleifend. Amet varius sit lobortis massa sit varius enim
            sollicitudin. Lacus bibendum risus quis aliquam elementum porttitor
            commodo. At in pretium nunc arcu tristique dolor. At vestibulum
            cursus ut quis euismod. Aenean molestie ullamcorper volutpat
            fringilla aliquam. Elit vitae arcu lectus id enim erat nec. Risus at
            ipsum id erat. Est vel sollicitudin imperdiet viverra purus. Posuere
            porttitor molestie mus et lobortis arcu sed nulla. Id faucibus enim
            pulvinar at in aliquam tortor dolor. Nisi egestas interdum dapibus
            sed.
          </p>
          <p className="mx-auto text-base">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
