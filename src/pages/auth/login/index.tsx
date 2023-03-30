import {
  Button,
  Card,
  ContainerFixed,
  Content,
  Flex,
  Form,
  FormItem,
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
} from "@core";
import styled from "@emotion/styled";
import { Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { memo } from "react";

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

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const StyledContainerFixed = styled(ContainerFixed)`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  const StyledContent = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledContainerFixed position="center">
      <StyledContent>
        <ContainerFixed>
          <Card>
            <Flex align={EFlexAlign.Center} justify={EJustifyFlex.Center}>
              {/* <Logo width={LOGO_INTRO} src={`${assets.getImages(LOGO)}`} /> */}
            </Flex>
            <Tabs
              items={[
                {
                  key: "1",
                  label: "Đăng nhập",
                  children: (
                    <Form
                      name="login"
                      labelCol={{ span: 5 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Space widthFull size={SizeProps.Large}>
                        <Space widthFull>
                          <FormItem
                            label="Username"
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <InputText />
                          </FormItem>
                          <FormItem
                            label="Password"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                          >
                            <Input.Password />
                            {/* <InputPassword /> */}
                          </FormItem>
                        </Space>
                        <FormItem name="remember" valuePropName="checked">
                          <Flex justify={EJustifyFlex.SpaceBetween}>
                            <RememberMe />
                            <Button type={EButtonTypes.Link}>
                              Quên mật khẩu
                            </Button>
                          </Flex>
                        </FormItem>
                        <FormItem>
                          <Button
                            block
                            type={EButtonTypes.Primary}
                            htmlType={EHtmlButtonTypes.Submit}
                          >
                            Đăng nhập
                          </Button>
                        </FormItem>
                      </Space>
                    </Form>
                  ),
                },
              ]}
            />
          </Card>
        </ContainerFixed>
      </StyledContent>
    </StyledContainerFixed>
  );
}

export default memo(LoginPage);
