import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  GET_RECENTFILESORGIDNULL27: `${COMMON_URL}www.figma.com/api/recent_files?org_id=null`,
  POST_LOGIN: `${COMMON_URL}nodedemo.dhiwise.co/device/auth/login`,
};

export const getRecentfilesorgidnull27 = (payload) =>
  apis.get(API_URLS.GET_RECENTFILESORGIDNULL27, {
    ...payload,
    params: { org_id: "null", ...payload?.params },
  });

export const postLogin = (payload) =>
  apis.post(API_URLS.POST_LOGIN, {
    ...payload,
    headers: { "Content-Type": "application/json", ...payload?.headers },
  });

export const getVersions = ({
  data = {},
  id,
  headers = {},
  params = {},
  path = {},
} = {}) =>
  apis.get(`https://api.figma.com/v1/files/${id}/versions`, {
    headers: {
      "X-FIGMA-TOKEN": "<token>",
    },
  });

export const getComments = (payload) =>
  apis.get(`https://api.figma.com/v1/files/${payload?.id}/comments`, {
    headers: {
      "X-FIGMA-TOKEN": "<token>",
    },
  });
