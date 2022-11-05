import * as yup from "yup";

export const contractGeneralSchema = yup.object().shape({
  nombre: yup.string().required("El nombre del contrato es requerido"),
  descripcion: yup.string().required("La descripción del contrato es requerida"),
  area: yup.string().required("La descripción del contrato es requerida"),
  fecha_inicio: yup.date("Debe ser una fecha válida").required("El campo fecha de inicio es requerido"),
  fecha_fin: yup.date("Debe ser una fecha válida").required("El campo fecha de fin es requerido"),
  numero_reporte: yup.boolean(),
  activo: yup.boolean(),
})

export const contractCamposSchema = yup.object().shape({
  campos: yup.object().shape({
    numero_reporte: yup.boolean().nullable(),
    numero_orden: yup.boolean().nullable(),
    unidad: yup.boolean().nullable(),
    equipo_completo: yup.boolean().nullable(),
    diametro: yup.boolean().nullable(),
    espesor: yup.boolean().nullable(),
    numero_costuras: yup.boolean().nullable(),
    cantidad_placas: yup.boolean().nullable(),
    tipo_rx: yup.boolean().nullable(),
    paga: yup.boolean().nullable(),
  }),
})

export const contractItemsSchema = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      descripcion_servicio: yup.string().required("La descripción del servicio es requerida"),
      codigo_servicio: yup.string().required("El código de servicio es requerido"),
      unidad_medida: yup.string().required("La unidad de medida es requerida"),
      tipo_actividad: yup.string().required("El tipo de actividad es requeria"),
      clase: yup.string().required("La clase es requerida"),
      valor: yup.number()
        .typeError('El valor debe ser un número')
        .positive('El número debe ser mayor que cero')
        .required('El precio es requerido')
    })
  ),
})

export const contractUnidadesSchema = yup.object().shape({
  unidades: yup.array().of(
    yup.object().shape({
      nombre: yup.string().required("El nombre de la unidad es requerido"),
    })
  ),
})

export const contractCertificantesSchema = yup.object().shape({
  certificantes: yup.array().of(
    yup.object().shape({
      nombre: yup.string().required("El nombre del certificante es requerido"),
    })
  ),
})

//USUARIOS whit password
export const userAddSchema = yup.object().shape({
  nombre: yup.string().required("El nombre del usuario es requerido"),
  apellido: yup.string().required("El apellido del usuario es requerido"),
  area: yup.string().required("El área del usuario es requerida"),
  role: yup.string().required("El rol del usuario es requerido"),
  email: yup.string().required("El email del usuario es requerido"),
  numero_orden: yup.string().required("El número de orden es requerido"),
  password: yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener mínimo 6 caracteres'),
})

//USUARIOS whitout password
export const userEditSchema = yup.object().shape({
  nombre: yup.string().required("El nombre del usuario es requerido"),
  apellido: yup.string().required("El apellido del usuario es requerido"),
  area: yup.string().required("El área del usuario es requerida"),
  role: yup.string().required("El rol del usuario es requerido"),
  email: yup.string().required("El email del usuario es requerido"),
  numero_orden: yup.string().required("El número de orden es requerido"),
  active: yup.boolean(),
})

//USUARIOS whit password
export const passwordSchema = yup.object().shape({
  password: yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener mínimo 6 caracteres'),
  confirm: yup.string()
    .required('La contraseña es obligatoria')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  //active: yup.boolean(),
})


//CLIENTES
export const clientSchema = yup.object().shape({
  nombre: yup.string().required("El nombre del cliente es requerido"),
  abreviatura: yup.string().required("La abreviatura es requerida"),
  telefono: yup.string().required("El teléfono es requerido"),
  direccion: yup.string().required("La dirección es requerida"),
  email: yup.string().required("El email es requerido"),
  active: yup.boolean(),
})

//PARTE DIARIO
export const partesSchema = yup.object().shape({
  //contrato: yup.string().required("El contrato es un campo requerido"),
  unidad: yup.string().required("La unidad es obligatoria"),
  fecha_inspeccion: yup.date()
    .typeError('Debe ser una fecha válida')
    .required("El campo fecha de fin es obligatorio"),
  numero_reporte: yup.string(),
  numero_orden: yup.string(),
  tag: yup.string().required("El TAG es obligatorio"),
  tag_detalle: yup.string(),

  detalles: yup.object().shape({
    diametro: yup.number(),
    espesor: yup.number(),
    numero_costuras: yup.number(),
    cantidad_placas: yup.number(),
    tipo: yup.string(),
  }),

  items: yup.array().of(
    yup.object().shape({
      descripcion_servicio: yup.string().required("La descripción del servicio es obligatoria"),
      cantidad: yup.number()
        .typeError('La cantidad debe ser un número')
        .positive('Debe ser un número positivo')
        .required('La cantidad es requerida'),
    })
  ),
})
