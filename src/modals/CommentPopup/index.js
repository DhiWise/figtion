import React from "react";
import ModalProvider from "react-modal";
import { getComments, getVersions } from "service/api";
import moment from "moment";

import { Column, Row, Text, Img, Line, Button, List } from "components";

const CommentPopupModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const { id } = props;

  React.useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    if (!id) return;
    const req = {};
    await getComments({ req, id: id })
      .then((res) => {
        console.log("res", res);
        return setapiData(res);
      })
      .catch((err,res) => {
        console.error(err);
      });
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[42%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius5 w-[100%]">
            <Row className="items-center justify-between lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[93%]">
              <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                Comments
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
              {apiData?.comments?.map((apiDataCommentsEle) => {
                return (
                  <>
                    <Row className="lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[55%]">
                      <Img
                        src={apiDataCommentsEle?.user?.img_url}
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 w-[auto]"
                        alt="Frame"
                      />
                      <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        {apiDataCommentsEle?.user?.handle}{" "}
                      </Text>
                      <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                        {moment(apiDataCommentsEle?.created_at).format(
                          "DD/MM/YYYY"
                        )}{" "}
                      </Text>
                    </Row>
                    <Text className="font-normal lg:leading-[20px] xl:leading-[23px] leading-[26.00px] 2xl:leading-[26px] 3xl:leading-[31px] lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 w-[85%]">
                      {apiDataCommentsEle?.message}
                    </Text>
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

export default CommentPopupModal;
