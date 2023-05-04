import { Navbar, Text, Avatar, Dropdown, Input, Row } from "@nextui-org/react";
import { AcmeLogo } from "../components/AcmeLogo.jsx";
import { Layout } from "../components/Layout.jsx";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Layout>
      <Navbar isBordered shouldHieOnScroll variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Link to="/">
            <Row align="center">
            <AcmeLogo />
            <Text style={styles.LogoNav} b color="inherit" css={{ mr: "$11"}} hideIn="xs">
              TalkyTrip
            </Text>
            </Row>
          </Link>
          <Navbar.Content hideIn="xs" variant="highlight">
            <Navbar.Link  href="/profile">
              Profile
            </Navbar.Link>
            <Navbar.Link href="/write">Write</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={<RiSearchLine size={17} />}
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}

const styles = {

};
export default MainNavbar;
