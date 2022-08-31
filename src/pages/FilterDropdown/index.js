import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Button,
  Stack,
  List,
  CheckBox,
  Text,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FilterDropdownPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        compid="5203:11338"
        comptype="Column"
      >
        <header className="w-[100%]" compid="5" comptype="Header">
          <Row
            className="bg-bluegray_900 items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]"
            compid="5203:11339"
            comptype="Row"
          >
            <Img
              src="images/img_settings.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[2%]"
              compid="5203:11342"
              comptype="Image"
              alt="settings"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[39px] 3xl:ml-[46px] flex lg:ml-[30px] w-[30%] xl:ml-[34px]"
              compid="5203:11343"
              comptype="SearchView"
              name="GroupThirty"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[1px] lg:w-[10px] lg:h-[11px] lg:mr-[7px] xl:w-[12px] xl:h-[13px] xl:mr-[8px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[9px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[10px] my-[auto]"
                  compid="5203:11346"
                  comptype="Image"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#8f8c8c"
                    className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:ml-[7px] lg:mr-[17px] xl:w-[12px] xl:h-[13px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder5"
              size="smSrc"
            ></Input>
            <Img
              src="images/img_notification.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[502px] xl:ml-[574px] 2xl:ml-[646px] 3xl:ml-[775px] w-[1%]"
              compid="5203:11349"
              comptype="Image"
              alt="notification"
            />
            <Button
              className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[50px] xl:mr-[57px] 2xl:mr-[65px] 3xl:mr-[78px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
              compid="5203:11350"
              comptype="Button"
              size="sm"
              variant="FillBlue500"
            >
              Logout
            </Button>
          </Row>
        </header>
        <Stack
          className="3xl:h-[1120px] lg:h-[725px] xl:h-[830px] 2xl:h-[933px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%]"
          compid="5203:11353"
          comptype="Stack"
        >
          <Column
            className="absolute bottom-[0] items-center w-[100%]"
            compid="5474:12764"
            comptype="Column"
          >
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compid="11"
              comptype="List"
              orientation="vertical"
            >
              <Row
                className="bg-gray_100 border border-gray_401 border-solid items-center my-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                compid="5474:12765"
                comptype="Row"
              >
                <CheckBox
                  className="font-normal ml-[4px] mt-[2px] not-italic lg:pl-[30px] xl:pl-[34px] 2xl:pl-[39px] 3xl:pl-[46px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  compid="6"
                  comptype="CheckBox"
                  name="Figma"
                  label="Figma"
                ></CheckBox>
                <Text
                  className="font-normal lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5474:12768"
                  comptype="Text"
                >
                  File name
                </Text>
                <Text
                  className="font-normal lg:ml-[182px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5474:12770"
                  comptype="Text"
                >
                  Share on
                </Text>
                <Text
                  className="font-normal lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5474:12771"
                  comptype="Text"
                >
                  Version History
                </Text>
                <Text
                  className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5474:12772"
                  comptype="Text"
                >
                  Comments
                </Text>
                <Text
                  className="font-normal 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5474:12773"
                  comptype="Text"
                >
                  URL
                </Text>
              </Row>
              <Row
                className="bg-gray_100 border border-gray_401 border-solid items-center my-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                compid="5483:10749"
                comptype="Row"
              >
                <CheckBox
                  className="font-normal ml-[4px] mt-[2px] not-italic lg:pl-[30px] xl:pl-[34px] 2xl:pl-[39px] 3xl:pl-[46px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  compid="7"
                  comptype="CheckBox"
                  name="Figma One"
                  label="Figma"
                ></CheckBox>
                <Text
                  className="font-normal lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5483:10752"
                  comptype="Text"
                >
                  File name
                </Text>
                <Text
                  className="font-normal lg:ml-[182px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5483:10754"
                  comptype="Text"
                >
                  Share on
                </Text>
                <Text
                  className="font-normal lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5483:10755"
                  comptype="Text"
                >
                  Version History
                </Text>
                <Text
                  className="font-normal 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5483:10756"
                  comptype="Text"
                >
                  Comments
                </Text>
                <Text
                  className="font-normal 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]"
                  compid="5483:10757"
                  comptype="Text"
                >
                  URL
                </Text>
              </Row>
            </List>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compid="12"
              comptype="List"
              orientation="vertical"
            >
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10761"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:10795;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10762"
                  comptype="Image"
                  alt="RectangleThirtyFour"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10763"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10766"
                  comptype="Image"
                  alt="cut"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10773"
                  comptype="Image"
                  alt="GroupThirtyFour"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:10780"
                  comptype="Image"
                  alt="GroupThirtyThree"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:10786"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10787"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:10788"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10789"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:10790"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10791"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:10794"
                    comptype="Image"
                    alt="file"
                  />
                </Row>
              </Row>
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10798"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:10832;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10799"
                  comptype="Image"
                  alt="RectangleThirtyFour One"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10800"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10803"
                  comptype="Image"
                  alt="cut One"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10810"
                  comptype="Image"
                  alt="GroupThirtyFour One"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:10817"
                  comptype="Image"
                  alt="GroupThirtyThree One"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:10823"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10824"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:10825"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10826"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:10827"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10828"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:10831"
                    comptype="Image"
                    alt="file One"
                  />
                </Row>
              </Row>
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10835"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:10869;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10836"
                  comptype="Image"
                  alt="RectangleThirtyFour Two"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10837"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10840"
                  comptype="Image"
                  alt="cut Two"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10847"
                  comptype="Image"
                  alt="GroupThirtyFour Two"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:10854"
                  comptype="Image"
                  alt="GroupThirtyThree Two"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:10860"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10861"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:10862"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10863"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:10864"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10865"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:10868"
                    comptype="Image"
                    alt="file Two"
                  />
                </Row>
              </Row>
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10872"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:10906;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10873"
                  comptype="Image"
                  alt="RectangleThirtyFour Three"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10874"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10877"
                  comptype="Image"
                  alt="cut Three"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10884"
                  comptype="Image"
                  alt="GroupThirtyFour Three"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:10891"
                  comptype="Image"
                  alt="GroupThirtyThree Three"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:10897"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10898"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:10899"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10900"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:10901"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10902"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:10905"
                    comptype="Image"
                    alt="file Three"
                  />
                </Row>
              </Row>
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10909"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:10943;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10910"
                  comptype="Image"
                  alt="RectangleThirtyFour Four"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10911"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10914"
                  comptype="Image"
                  alt="cut Four"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10921"
                  comptype="Image"
                  alt="GroupThirtyFour Four"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:10928"
                  comptype="Image"
                  alt="GroupThirtyThree Four"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:10934"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10935"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:10936"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10937"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:10938"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10939"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:10942"
                    comptype="Image"
                    alt="file Four"
                  />
                </Row>
              </Row>
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10946"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:10980;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10947"
                  comptype="Image"
                  alt="RectangleThirtyFour Five"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10948"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10951"
                  comptype="Image"
                  alt="cut Five"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10958"
                  comptype="Image"
                  alt="GroupThirtyFour Five"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:10965"
                  comptype="Image"
                  alt="GroupThirtyThree Five"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:10971"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10972"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:10973"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10974"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:10975"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:10976"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:10979"
                    comptype="Image"
                    alt="file Five"
                  />
                </Row>
              </Row>
              <Row
                className="border border-gray_401 border-solid items-center my-[0] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
                compid="5483:10983"
                comptype="Row"
              >
                <div
                  className="bg-white_A700 border border-gray_401 border-solid lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius25 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I5483:11017;119:32"
                  comptype="View"
                ></div>
                <Img
                  src="images/img_rectangle34.png"
                  className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius5 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                  compid="5483:10984"
                  comptype="Image"
                  alt="RectangleThirtyFour Six"
                />
                <Text
                  className="font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                  compid="5483:10985"
                  comptype="Text"
                >
                  Figtion Dhiwise Templates
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  compid="5483:10988"
                  comptype="Image"
                  alt="cut Six"
                />
                <Img
                  src="images/img_group34.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  compid="5483:10995"
                  comptype="Image"
                  alt="GroupThirtyFour Six"
                />
                <Img
                  src="images/img_group33.png"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  compid="5483:11002"
                  comptype="Image"
                  alt="GroupThirtyThree Six"
                />
                <Column
                  className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius5 w-[13%]"
                  compid="5483:11008"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:11009"
                    comptype="Text"
                  >
                    Show Version History
                  </Text>
                </Column>
                <Column
                  className="items-center lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] rounded-radius5 w-[7%]"
                  compid="5483:11010"
                  comptype="Column"
                >
                  <Text
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:11011"
                    comptype="Text"
                  >
                    Comments
                  </Text>
                </Column>
                <Row
                  className="justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] rounded-radius5 w-[5%]"
                  compid="5483:11012"
                  comptype="Row"
                >
                  <Text
                    className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_500 w-[auto]"
                    compid="5483:11013"
                    comptype="Text"
                  >
                    Open
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[22%]"
                    compid="5483:11016"
                    comptype="Image"
                    alt="file Six"
                  />
                </Row>
              </Row>
            </List>
          </Column>
          <Row
            className="absolute top-[0] w-[100%]"
            compid="5203:11589"
            comptype="Row"
          >
            <Text
              className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]"
              compid="5203:11590"
              comptype="Text"
            >
              Figma Files
            </Text>
            <Text
              className="font-normal lg:ml-[537px] xl:ml-[614px] 2xl:ml-[691px] 3xl:ml-[829px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
              compid="5474:13022"
              comptype="Text"
            >
              Share:
            </Text>
            <Img
              src="images/img_cut.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              compid="5474:13025"
              comptype="Image"
              alt="cut Seven"
            />
            <Img
              src="images/img_group33.png"
              className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] mt-[4px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
              compid="5474:13032"
              comptype="Image"
              alt="GroupThirtyThree Seven"
            />
            <Img
              src="images/img_group34.png"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
              compid="5474:13040"
              comptype="Image"
              alt="GroupThirtyFour Seven"
            />
            <Text
              className="font-normal lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
              compid="5203:11592"
              comptype="Text"
            >
              Filter:
            </Text>
            <Column
              className="lg:h-[103px] xl:h-[118px] 2xl:h-[133px] 3xl:h-[159px] items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:w-[102px] xl:w-[117px] 2xl:w-[132px] 3xl:w-[158px]"
              compid="5203:11593"
              comptype="Column"
            >
              <SelectBox
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[100%]"
                compid="5203:11594"
                comptype="Dropdown"
                placeholderClassName="text-bluegray_900"
                name="Dropdown"
                placeholder="Created At"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:w-[10px] lg:h-[7px] lg:mr-[14px] xl:w-[11px] xl:h-[8px] xl:mr-[16px] 2xl:w-[13px] 2xl:h-[9px] 2xl:mr-[19px] 3xl:w-[15px] 3xl:h-[10px] 3xl:mr-[22px]"
                    compid="5203:11598"
                    comptype="Image"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Column
                className="bg-white_A700 border border-gray_401 border-solid justify-end mt-[4px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius6 w-[100%]"
                compid="5203:11599"
                comptype="Column"
              >
                <Text
                  className="font-medium ml-[3px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                  compid="5203:11601"
                  comptype="Text"
                >
                  Created At
                </Text>
                <Text
                  className="font-normal ml-[3px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]"
                  compid="5203:11603"
                  comptype="Text"
                >
                  Updated At
                </Text>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default FilterDropdownPage;
