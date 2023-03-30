import {
  Button,
  Card,
  ContainerFixed,
  Content,
  Flex,
  Form,
  FormItem,
  InputPassword,
  InputText,
  RememberMe,
  SizeProps,
  Space,
  Tabs,
} from "@components";
import {
  EButtonTypes,
  EFlexAlign,
  EHtmlButtonTypes,
  EJustifyFlex,
  routerPathFull,
} from "@core";
import styled from "@emotion/styled";
import { Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormItem from "./login-form-item";

export interface LoginProps {}

export function LoginPage(_props: LoginProps) {
  // const assets = useAssets(AppConfig).getApp();
  // const [phoneCode] = useStorePersist((state: any) => [
  //   state.phoneCode.replace("+", ""),
  // ]);
  // const { resolver } = useResolver(formLoginSchema);
  // const [setToken, setTokenExpires, setRefreshToken] = useStoreToken(
  //   (state: any) => [
  //     state.setToken,
  //     state.setTokenExpires,
  //     state.setRefreshToken,
  //   ]
  // );
  // const navigate = useNavigate();
  const [formMethods] = useForm();
  // const {
  //   formState: { isValid },
  // } = formMethods;

  // const { mutate: getMe, isLoading: loadingGetMe } =
  //   useMutation<GetMeRes.AsObject>({
  //     mutationKey: ["partnershipUserApiService", "getMe"],
  //     mutationFn: partnershipUserApiService?.getMe,
  //     onSuccess: (data) =>
  //       navigate(
  //         data?.isChangedPassword
  //           ? routerPathFull.admin.events.root
  //           : routerPathFull.auth.newPassword
  //       ),
  //   });

  // const { mutate: login, isLoading } = useMutation<LoginRes.AsObject>({
  //   mutationKey: ["partnershipAuthService", "login"],
  //   mutationFn: partnershipAuthService?.login,
  //   onSuccess: (data) => {
  //     setToken(data?.accessToken || "");
  //     setTokenExpires(data?.expireTime || 0);
  //     setRefreshToken(data?.refreshToken || "");
  //     getMe(unknown);
  //   },
  // });

  // // TODO: Handle partnershipId hard code
  // const partnershipId = "630720682f9a32ef3356b3ab";

  const onSubmit = async ({ phoneNumber, password }: any) => {};

  // const formGenMemo = useMemo(() => <FormLoginGen />, []);

  // const { t, i18n } = useTranslation();
  const navigation = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigation(routerPathFull.home.root + "/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Tabs
        items={[
          {
            key: "1",
            label: "Đăng nhập",
            children: (
              <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Space widthFull size={SizeProps.Large}>
                  <LoginFormItem />
                  <Flex justify={EJustifyFlex.SpaceBetween}>
                    <RememberMe />
                    <Link to={routerPathFull.auth.forgotPass}>
                      Quên mật khẩu
                    </Link>
                  </Flex>
                  <Button
                    block
                    type={EButtonTypes.Primary}
                    htmlType={EHtmlButtonTypes.Submit}
                  >
                    Đăng nhập
                  </Button>
                  <Flex justify={EJustifyFlex.Center}>
                    <Link to={routerPathFull.auth.register}>
                      Đăng kí tài khoản
                    </Link>
                  </Flex>
                </Space>
              </Form>
            ),
          },
        ]}
      />
    </Card>
  );
}

export default memo(LoginPage);
