module.exports={
    datos_gestion:[
        { Tipo: "GESTIÓN DE ACEITES" },
        {
          Tipo: "ZN",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZS",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZO",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZA",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        { Tipo: "MANTENIMIENTO ESTACIONES" },
        {
          Tipo: "ZN",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZS",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZO",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZA",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        { Tipo: "MANTENIMIENTO LÍNEAS" },
        {
          Tipo: "ZN",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZS",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZO",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
        {
          Tipo: "ZA",
          RPM_2020: "Plan Estacional",
          Generadas_2020: "207",
          Cerradas_2020: "137",
          RPM_2021: "Plan Estacional",
          Generadas_2021: "207",
          Cerradas_2021: "137",
          RPM_2022: "Plan Estacional",
        },
      ],


      datos_columnas:[
        {
          Header: "                ",
          columns: [
            {
              Header: "     ",
              columns: [
                {
                  Header: "        ",
                  accessor: "Tipo",
                  fontSize: "12px",
                  fontWeight: "bold",
                  minWidth: 110,
                  backgroundColor: "gray",
                },
              ],
            },
          ],
        },
        {
          Header: "PERIODO 2020",
          columns: [
            {
              Header: " ",
              columns: [
                {
                  Header: "RPM",
                  accessor: "RPM_2020",
                  fontSize: "12px",
                  fontWeight: "bold",
                  minWidth: 110,
                },
                {
                  Header: "Generadas",
                  accessor: "Generadas_2020",
                  fontSize: "12px",
                  minWidth: 60,
                  //backgroundColor: "gray",
                },
                {
                  Header: "Cerradas",
                  accessor: "Cerradas_2020",
                  fontSize: "12px",
                  minWidth: 60,
                  //backgroundColor: "gray",
                },
              ],
            },
          ],
        },
        {
          Header: "PERIODO 2021",
          columns: [
            {
              Header: "  ",
              columns: [
                {
                  Header: "RPM",
                  accessor: "RPM_2021",
                  fontSize: "12px",
                  fontWeight: "bold",
                  minWidth: 110,
                },
                {
                  Header: "Generadas",
                  accessor: "Generadas_2021",
                  fontSize: "12px",
                  minWidth: 60,
                  //backgroundColor: "gray",
                },
                {
                  Header: "Cerradas",
                  accessor: "Cerradas_2021",
                  fontSize: "12px",
                  minWidth: 60,
                  //backgroundColor: "gray",
                },
              ],
            },
          ],
        },
        {
          Header: "PERIODO 2022",
          columns: [
            {
              Header: "   ",
              columns: [
                {
                  Header: "RPM",
                  accessor: "RPM_2022",
                  fontSize: "12px",
                  fontWeight: "bold",
                  minWidth: 110,
                },
              ],
            },
            {
              Header: "ene-22",
              columns: [
                {
                  Header: "Generadas",
                  accessor: "G_1",
                  fontSize: "12px",
                  minWidth: 70,
                },
                {
                  Header: "Cerradas",
                  accessor: "C_1",
                  fontSize: "12px",
                  minWidth: 70,
                },
              ],
            },
            {
              Header: "feb-22",
              columns: [
                {
                  Header: "Generadas",
                  accessor: "G_2",
                  fontSize: "12px",
                  minWidth: 70,
                },
                {
                  Header: "Cerradas",
                  accessor: "C_2",
                  fontSize: "12px",
                  minWidth: 70,
                },
              ],
            },
            {
              Header: "mar-22",
              columns: [
                {
                  Header: "Generadas",
                  accessor: "G_3",
                  fontSize: "12px",
                  minWidth: 70,
                },
                {
                  Header: "Cerradas",
                  accessor: "C_3",
                  fontSize: "12px",
                  minWidth: 70,
                },
              ],
            },
            {
              Header: "abr-22",
              columns: [
                {
                  Header: "Generadas",
                  accessor: "G_4",
                  fontSize: "12px",
                  minWidth: 70,
                },
                {
                  Header: "Cerradas",
                  accessor: "C_4",
                  fontSize: "12px",
                  minWidth: 70,
                },
              ],
            },
            {
              Header: "may-22",
              columns: [
                {
                  Header: "Generadas",
                  accessor: "G_5",
                  fontSize: "12px",
                  minWidth: 70,
                },
                {
                  Header: "Cerradas",
                  accessor: "C_5",
                  fontSize: "12px",
                  minWidth: 70,
                },
              ],
            },
            {
                Header: "jun-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_6",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_6",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
              {
                Header: "jul-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_7",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_7",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
              {
                Header: "ago-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_8",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_8",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
              {
                Header: "sep-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_9",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_9",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
              {
                Header: "oct-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_10",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_10",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
              {
                Header: "nov-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_11",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_11",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
              {
                Header: "dic-22",
                columns: [
                  {
                    Header: "Generadas",
                    accessor: "G_12",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                  {
                    Header: "Cerradas",
                    accessor: "C_12",
                    fontSize: "12px",
                    minWidth: 70,
                  },
                ],
              },
          ],
        },
      ]

}