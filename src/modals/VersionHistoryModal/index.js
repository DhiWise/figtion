import React from "react";
import ModalProvider from "react-modal";
import { getVersions } from "service/api";
import moment from "moment";

import { Column, Row, Text, Img, Line, Input, List } from "components";

const VersionHistoryModalModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const { id: versionId } = props;

  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    if (!versionId) return;
    const req = {};
    getVersions({ req, id: versionId })
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <ModalProvider
        className="m-[auto] w-[42%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius5 w-[100%]">
            <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[83%]">
              <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                Version History
              </Text>
              <Img
                src="images/img_close_16X16.svg"
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
                onClick={props.onRequestClose}
              />
            </Row>
            <Line className="bg-gray_400 h-[0.5px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[93%]" />
            <List>
              {apiData?.versions?.map((apiDataVersionsEle) => {
                return (
                  <>
                    <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                      Last Update
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-normal lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-black_900 text-black_900 w-[100%]"
                      wrapClassName="3xl:ml-[21px] bg-gray_100 border border-gray_400 border-solid lg:ml-[14px] ml-[18px] mt-[4px] rounded-radius5 w-[20%] xl:ml-[16px]"
                      name="Group24"
                      placeholder={moment(
                        apiDataVersionsEle?.created_at
                      ).format("DD/MM/YYYY")}
                    ></Input>
                    <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                      Designer
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-normal p-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-black_900 text-black_900 w-[100%]"
                      wrapClassName="3xl:ml-[21px] 3xl:pl-[18px] 3xl:pr-[42px] 3xl:py-[14px] bg-gray_100 border border-gray_400 border-solid flex lg:ml-[14px] lg:pl-[11px] lg:pr-[27px] lg:py-[9px] ml-[18px] mt-[4px] pl-[15px] pr-[35px] py-[12px] rounded-radius5 w-[20%] xl:ml-[16px] xl:pl-[13px] xl:pr-[31px] xl:py-[10px]"
                      name="Group24"
                      placeholder={apiDataVersionsEle?.user?.handle}
                      prefix={
                        <Img
                          src={apiDataVersionsEle?.user?.img_url}
                          className="w-[24px] h-[24px] mr-[8px] lg:w-[18px] lg:h-[19px] lg:mr-[6px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px] rounded-radius50 my-[auto]"
                          alt="Frame"
                        />
                      }
                    ></Input>
                    <Row className="items-center lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[93%]">
                      <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                        URL
                      </Text>
                    </Row>
                    <Row className="bg-gray_100 border border-gray_400 border-solid items-center lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] mt-[4px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius5 w-[20%]">
                      <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 w-[100%]">
                        {apiDataVersionsEle?.thumbnail_url}
                      </Text>
                    </Row>
                  </>
                );
              })}
            </List>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default VersionHistoryModalModal;
