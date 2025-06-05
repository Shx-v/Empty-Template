import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export const useRoutes = () => {
  return [
    {
      title: "Home",
      path: "/home",
      icon: <HomeIcon />,
    },
    {
      header: "Sample Pages",
      icon: <HomeIcon />,
      children: [
        {
          title: "Page 1",
          path: "/page1",
          icon: <HomeIcon />,
        },
        {
          title: "Page 2",
          path: "/page2",
          icon: <PersonIcon />,
        },
        {
          title: "Level 1",
          icon: <SettingsIcon />,
          children: [
            {
              title: "Level 2a",
              path: "/page1",
              icon: <HomeIcon />,
            },
            {
              title: "Level 2b",
              icon: <PersonIcon />,
              children: [
                {
                  title: "Level 3a",
                  path: "/page2",
                  icon: <HomeIcon />,
                },
                {
                  title: "Level 3b",
                  path: "/page3",
                  icon: <HomeIcon />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};
