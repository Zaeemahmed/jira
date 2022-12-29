import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { Project } from "../../utils/__generated__/graphql";

interface ProjectTableProps {
  projects?: Project[];
}

interface Column {
  id: "name" | "key" | "type" | "lead";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "name", label: "Name" },
  {
    id: "key",
    label: "Key",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "lead",
    label: "Lead",
  },
];

interface Data {
  name: string;
  key: string;
  type: string;
  lead: string;
}

function createData(
  name: string,
  key: string,
  type: string,
  lead: string
): Data {
  return { name, key, type, lead };
}

const rows = [createData("India", "IN", "1324171354", "3287263")];

export const ProjectsTable = ({ projects }: ProjectTableProps) => {
  const { id } = useParams();
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== auth?.user?.site) {
      navigate("/");
    }
  }, []);

  return (
    <Paper sx={{ width: "80%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {projects?.map((project, id) => {
              return (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={id}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell align={"left"}>{project.name}</TableCell>
                  <TableCell align={"left"}>{project.key}</TableCell>
                  <TableCell align={"left"}>Team-managed software</TableCell>
                  <TableCell align={"left"}>
                    {project.projectLead?.fullName}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
