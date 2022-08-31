import React from "react";

import { useNavigate } from "react-router-dom";
import { getRecentfilesorgidnull27 } from "service/api";
import CommentPopupModal from "modals/CommentPopup";
import axios from "axios";
import { sortBy } from "lodash";

import VersionHistoryModalModal from "modals/VersionHistoryModal";
import {
  Column,
  Row,
  Img,
  Input,
  Button,
  Text,
  SelectBox,
  CheckBox,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardPage = () => {
  const [apiData, setapiData] = React.useState();
  const [fileInfo, setFileInfo] = React.useState([]);
  const [currentVersionId, setCurrentVersionId] = React.useState();
  const [currentCommentId, setCurrentCommentId] = React.useState();
  const [data, setData] = React.useState();

  const navigate = useNavigate();
  const [isOpenCommentPopupModal, setCommentPopupModal] = React.useState(false);
  const [isOpenVersionHistoryModalModal, setVersionHistoryModalModal] =
    React.useState(false);
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const data = JSON.stringify({
      method: "get",
      url: "https://www.figma.com/api/recent_files?org_id=null",
      headers: {
        authority: "www.figma.com",
        accept: "application/json",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json",
        cookie:"your cookie"
 
        "sec-ch-ua":
          '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        tsid: "BZdK9stBobmdv5lP",
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "x-csrf-bypass": "yes",
      },
    });

    const config = {
      method: "post",
      url: "http://localhost:8045/data",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    getRecentfilesorgidnull27(config)
      .then((res) => {
        setapiData(res);
        console.log(res);
        setData(res?.meta?.recent_files);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1(apiDataRecentfilesEle) {
    const { key, name } = apiDataRecentfilesEle;
    const win = window.open(
      `https://www.figma.com/file/${key}/${name}`,
      "_blank"
    );
    win.focus();
  }
  function handleNavigate2() {
    navigate("/login");
  }
  function handleOpenCommentPopupModal(apiDataRecentfilesEle) {
    setCommentPopupModal(true);
    setCurrentCommentId(apiDataRecentfilesEle?.key);

  }
  function handleCloseCommentPopupModal() {
    setCommentPopupModal(false);
  }
  function handleOpenVersionHistoryModalModal(apiDataRecentfilesEle) {
    setVersionHistoryModalModal(true);
    setCurrentVersionId(apiDataRecentfilesEle?.key);

  }
  function handleCloseVersionHistoryModalModal() {
    setVersionHistoryModalModal(false);
  }
  function copyToclip(apiDataRecentfilesEle) {
    console.log("in",apiDataRecentfilesEle?.url)
    const el = document?.createElement("textarea");
    el.value = apiDataRecentfilesEle?.url;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document?.body?.appendChild(el);
    el.select();
    document?.execCommand("copy");
    document?.body?.removeChild(el);
  }
  function sendToWhatsaap(apiDataRecentfilesEle){
    let varto=apiDataRecentfilesEle?.url
               
              
   
    window.open(
      `https://api.whatsapp.com/send?text=${varto}`,
      '_blank' 
    );
  }     
  function sendToSlack(apiDataRecentfilesEle){
    let varto=apiDataRecentfilesEle?.url
               
         
   
    axios.post(`<your slack webhook url>`,{
      text: `${varto}`
    })
  }
  // const [inputvalue, setInputvalue] = React.useState("");
  const handleFilterChange = (currentFilter) => {
    console.log("currentFilter",currentFilter);
    const sortedData = sortBy(apiData.meta.recent_files, currentFilter);
    console.log("sot, ", sortedData);
    setData(sortedData);
  };
  
  return (
    <>
      <Column
        className="bg-white_A700 font-inter items-center mx-[auto] lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] w-[100%]"
        compid="5203:11035"
        comptype="Column"
      >
        <header className="w-[100%]" compid="3" comptype="Header">
          <Row
            className="bg-bluegray_900 items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]"
            compid="5203:11036"
            comptype="Row"
          >
            <Img
              src="images/img_settings.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[2%]"
              compid="5203:11039"
              comptype="Image"
              alt="settings"
            />

            <Button
              className="common-pointer font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[50px] xl:mr-[57px] 2xl:mr-[65px] 3xl:mr-[78px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
              compid="5203:11047"
              comptype="Button"
              onClick={handleNavigate2}
              size="sm"
              variant="FillBlue500"
            >
              Logout
            </Button>
          </Row>
        </header>
        <Column
          className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%]"
          compid="8"
          comptype="Column"
        >
          <Row
            className="items-end w-[100%]"
            compid="5203:11286"
            comptype="Row"
          >
            <Text
              className="font-medium mb-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]"
              compid="5203:11287"
              comptype="Text"
            >
              Figma Files
            </Text>
            <Text
              className="font-normal lg:ml-[537px] xl:ml-[614px] 2xl:ml-[691px] 3xl:ml-[829px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
              compid="5203:11296"
              comptype="Text"
            >
              Share:
            </Text>
            <Img
              src="images/img_cut.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              compid="5203:11299"
              comptype="Image"
              alt="cut"
              onClick={(e) => {
                let varto=fileInfo.map((x) => x.url).toString()
               
              
                e.preventDefault();
                axios.post(`https://hooks.slack.com/services/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`,{
                  text: `${varto}`
                })
              
                }}
            />
            <Img
              src="images/img_group33.png"
              className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] my-[4px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
              compid="5203:11311"
              comptype="Image"
              alt="GroupThirtyThree"
              onClick={(e) => {
                let varto=fileInfo.map((x) => x.url).toString()
               
              
                e.preventDefault();
                window.open(
                  `https://api.whatsapp.com/send?text=${varto}`,
                  '_blank' 
                );
                }}
            />

            <Text
              className="font-normal lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
              compid="5203:11289"
              comptype="Text"
            >
              Filter:
            </Text>
            <SelectBox
              className="bg-white_A700 border border-gray_400 border-solid font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[10%]"
              placeholderClassName="bg-transparent text-bluegray_900"
              name="Dropdown"
              placeholder="Created At"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  className="w-[13.42px] h-[8.12px] mr-[19px] lg:w-[10px] lg:h-[7px] lg:mr-[14px] xl:w-[11px] xl:h-[8px] xl:mr-[16px] 2xl:w-[13px] 2xl:h-[9px] 3xl:w-[16px] 3xl:h-[10px] 3xl:mr-[22px]"
                  alt="Vector"
                />
              }
              onChange={handleFilterChange}
            ></SelectBox>
          </Row>
          <Row
            className="bg-gray_100 border border-gray_401 border-solid items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
            compid="5203:11052"
            comptype="Row"
          >
            <Text
              className="font-normal lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
              compid="5203:11055"
              comptype="Text"
            >
              File name
            </Text>
            <Text
              className="font-normal lg:ml-[182px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
              compid="5203:11057"
              comptype="Text"
            >
              Share on
            </Text>
            <Text
              className="font-normal lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
              compid="5203:11058"
              comptype="Text"
            >
              Version History
            </Text>
            <Text
              className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
              compid="5203:11059"
              comptype="Text"
            
            >
              Comments
            </Text>
            <Text
              className="font-normal 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
              compid="5203:11060"
              comptype="Text"
            >
              URL
            </Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            compid="9"
            comptype="List"
            orientation="vertical"
          >
            {data?.map((apiDataRecentfilesEle, index) => {
                return (
                  <React.Fragment key={`apiDataRecentfilesEle${index}`}>
                    <Row
                      className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                      compid="5203:11064"
                      comptype="Row"
                    >
                      <CheckBox
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        compid="I5203:11093;119:32"
                        comptype="CheckBox"
                        name="Rectangle452"
                        label=""
                        onChange={(e) => {
                          // add to list
                          if (e.target.checked) {
                            setFileInfo([
                              {
                                url: apiDataRecentfilesEle?.url,
                              },
                              ...fileInfo,
                            ]);
                          } else {
                            // remove from list
                            setFileInfo(
                              fileInfo.filter(
                                (file) => file.url !== apiDataRecentfilesEle.url
                              )
                            );
                          }
                        }}
                        value={fileInfo}
                        style={{ margin: "20px" }}
                      ></CheckBox>
                      <Img
                        src={apiDataRecentfilesEle?.["thumbnail_url"]}
                        className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                        compid="5203:11065"
                        comptype="Image"
                        alt="RectangleThirtyFour"
                      />
                      <Text
                        className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                        compid="5203:11066"
                        comptype="Text"
                        style= {{width : 150}}
                      >
                        {apiDataRecentfilesEle?.name}
                      </Text>
                      <Img
                        src="images/img_cut.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="5203:11069"
                        comptype="Image"
                        alt="cut One"
                        onClick={() => sendToSlack(apiDataRecentfilesEle)}

                      />

                      <Img
                        src="images/img_group33.png"
                        className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                        compid="5203:11081"
                        comptype="Image"
                        alt="GroupThirtyThree One"
                        onClick={() => sendToWhatsaap(apiDataRecentfilesEle)}
                      />
                      <Column
                        className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                        compid="5203:11087"
                        comptype="Column"
                      >
                        <Text
                          className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                          compid="5203:11088"
                          comptype="Text"
                          onClick={() =>
                            handleOpenVersionHistoryModalModal(apiDataRecentfilesEle)        }                >
                          Show Version History
                        </Text>
                      </Column>
                      <Column
                        className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                        compid="5203:11089"
                        comptype="Column"
                      >
                        <Text
                          className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                          compid="5203:11090"
                          comptype="Text"
                          onClick={() =>
                            handleOpenCommentPopupModal(apiDataRecentfilesEle)
                          }
                        >
                          Comments
                        </Text>
                      </Column>
                      <Row
                        className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                        compid="5203:11091"
                        comptype="Row"
                      >
                        <Text
                          className="common-pointer font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                          compid="5203:11092"
                          comptype="Text"
                          onClick={() => handleNavigate1(apiDataRecentfilesEle)}                        >
                          Open
                        </Text>
                        <Img
                          src="images/img_file.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                          compid="5483:10519"
                          comptype="Image"
                          alt="file"
                          onClick={() => copyToclip(apiDataRecentfilesEle)}
                        />
                      </Row>
                    </Row>
                  </React.Fragment>
                );
              })} 
            
          </List>
        </Column>
        <Text className="font-normal font-sourcesanspro lg:ml-[437px] xl:ml-[500px] ml-[563px] 3xl:ml-[675px] lg:mt-[245px] xl:mt-[281px] mt-[316px] 3xl:mt-[379px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900_b2 tracking-ls1 w-[auto]">
            Made with ❤️ using Dhiwise

          </Text>
      </Column>

      {isOpenCommentPopupModal ? (
        <CommentPopupModal
          isOpen={isOpenCommentPopupModal}
          onRequestClose={handleCloseCommentPopupModal}
          id={currentCommentId}

        />
      ) : null}
      {isOpenVersionHistoryModalModal ? (
        <VersionHistoryModalModal
          isOpen={isOpenVersionHistoryModalModal}
          onRequestClose={handleCloseVersionHistoryModalModal}
          id={currentVersionId}
        />
      ) : null}
    </>
  );
};

export default DashboardPage;
