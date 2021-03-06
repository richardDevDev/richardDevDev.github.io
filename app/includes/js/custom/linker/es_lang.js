const ccv_jofemar_lang = {
    "linker": {
        "status": {
            "response": {
                "unknown": {
                    "message": "Respuesta no reconocida",
                    "description": "La respuesta de la aplicación se recibió pero no se identificó con ninguno de los paramentros actuales",
                    "request": "Desconocido",
                },
                "timeout": "Se exedio el tiempo de espera para la respuesta de la operación."
            },
            "app": {
                "lost_connection": {
                    "message": "La conexión con la aplicacion se perdió."
                }
            }
        },
        "web": {
            "response": {
                "connection": {
                    "completed": {
                        "message": "Conexion con la BoardDroid completa",
                        "description": "Tu conexion se realizó con exito.",
                    }
                },
                "coin": {
                    "insert": {
                        "message": "Moneda insertada",
                        "tube": "tubo",
                        "box": "caja de ganancias",
                    },
                    "G50": "50 centavos (grande)",
                    "C50": "50 centavos (chica)",
                    "P1": "1 Peso",
                    "P2": "2 Pesos",
                    "P5": "5 Pesos",
                    "P10": "10 Pesos",
                    "undefined": "Valor indefinido, ¿{index}?",
                    "unknown": "Estatus desconocido. Sin informacion de la moneda",
                },
                "purse": {
                    "coin": {
                        "lever": {
                            "message": "Palanca de rechazo",
                            "description": "La palanca de rechazo fue activada",
                        },
                        "reset": {
                            "message": "Reinicio de monedero",
                            "description": "La configuración del monedero fue reiniciada",
                        },
                        "enable": {
                            "message1": "Monedero habilitado",
                            "message2": "Configuración completa",
                        },
                        "disable": {
                            "message1": "Monedero deshabilitado",
                            "message2": "Deshabilitado por sistema",
                        },
                        "unknown": {
                            "message1": "Estatus desconocido",
                            "message2": "La respuesta del monedero no se identificó correctamente",
                        },
                        "tubes": {
                            "read": {
                                "message": "Leer tubos",
                                "description": "Cantidad de monedas aproximadas",
                            }
                        }

                    },
                    "bill": {
                        "stacker": {
                            "pre": "Billete en pre stacker",
                            "inserted": "Billete insertado en el stacker",
                        },
                        "recycler": "Billete insertado en el reciclador",
                        "recycler_data": {
                            "message": "Cantidad de billetes",
                            "description": "Cantidad de billetes aproximadas: 20 pesos = {b20} billetes. 50 pesos = {b50} billetes. 100 pesos = {b1x0} billetes. 200 pesos = {b2x0} billetes. 500 pesos {b5x0} billetes. 1000 pesos {b10x0} billetes.",
                        },
                        "rejected": "Billete rechazado",
                        "accepted": "Billete aceptado",
                        "unknown": "Estatus del billete desconocido",
                        "value": {
                            "P20": "20 pesos",
                            "P50": "50 pesos",
                            "P100": "100 pesos",
                            "P200": "200 pesos",
                            "P500": "500 pesos",
                            "P1000": "1000 pesos",
                            "unknown": "Valor desconocido, ¿{index}?"
                        },
                        "status": {
                            "scroll": {
                                "disabled": "Configuración pre scroll deshabilitada billete entra directo",
                                "enabled": "Configuración pre scroll habilitada",
                            },
                            "disabled": "Billetero deshabilitado",
                            "enabled": "Billetero habilitado",
                        }
                    }
                },
                "dispense": {
                    "coin": "Monedas dispensadas",
                    "money": "Se dispensaron {quantity} pesos",
                    "description": "Cantidad aprox. $20x{b20cc}. $50x{b50cc}. $100x{b100cc} $200x{b200cc}. $500x{b500cc}. $1000x{b1000cc}",
                    "no_dispense": "No se dispenso dinero",
                    "no_dispense_problem": "Es probable que el billetero este vacio",
                },
                "product": {
                    "delivery": {
                        "fail": "Producto no entregado",
                        "fail_description": "No se entrego el producto solicitado",
                        "ok": "Producto entregado",
                        "ok_description": "El producto solicitado ({index}) fue entregado correctamente",
                    }
                },
                "door": {
                    "open": "Puerta abierta",
                    "close": "Puerta cerrada",
                },
                "temperature": {
                    "status": "Estatus de la temperatura",
                    "description": "La temperatura es "
                },
                "relay": {
                    "on": "RELEVADOR ENCENDIDO",
                    "off": "RELEVADOR APAGADO",
                },
                "nayax": {
                    "enable": {
                        "message": "Nayax habilitado",
                        "description": "El nayax ahora esta habilitado",
                    },
                    "disable": {
                        "message": "Nayax deshabilitado",
                        "description": "El nayax fue deshabilitado correctamente",
                    },
                    "credit": {
                        "message": "Credito pre autorizado",
                        "description": "Se pre autorizó el credito",
                    },
                    "cancellation": {
                        "message": "En proceso de cancelación",
                        "description": "Se generó una petición de cancelación",
                    },
                    "approved": {
                        "message": "Venta aprobada",
                        "description": "Venta aprobada empezando dispensado del producto",
                    },
                    "denied": {
                        "message": "Venta denegada",
                        "description": "La venta fue denegada",
                    },
                    "session_end": {
                        "message": "Sesión finalizada",
                        "description": "La sesión finalizó",
                    },
                    "cancelled": {
                        "message": "Cancelado",
                        "description": "Cancelación completa",
                    },
                    "dispense": {
                        "fail": {
                            "message": "Producto no dispensado",
                            "description": "El dispensado del producto pagado con nayax no se completo",
                        },
                        "ok": {
                            "message": "Producto dispensado",
                            "description": "El dispensado del producto finalizó correctamente"
                        },
                        "unknown": {
                            "message": "Estatus del dispensado desconocido",
                            "description": "No hay más infomación"
                        }

                    },
                    "unknown": {
                        "message": "Estatus desconocido",
                        "description": "Estatus del lector de tarjetas no se identificó",
                    }
                },
                "unknown": {
                    "message": "Estatus desconocido",
                    "description": "Error, la respuesta no se pudo identificar",
                    "alternative": "Sin más información",
                },
                "error_version":{
                    "message": "Respuesta no reconocida",
                    "description": "La respuesta de la aplicación se recibió pero no se identificó con ninguno de los paramentros actuales"
                }
            }
        }
    },
    "app": {
        "response": {
            "connected": "La aplicación se conecto con el sitio web",
            "disconnected": "Dispositivo serial desconectado",
            "disconnected_by_system": "La conexión con la boarddroid se termino por petición del sistema",
            "not_compatible": "La instrucción que se mando no es compatible con esta versión de la aplicación",
            "device_not_connected": "Conexión con la boarddroid no completada",
            "check_device_plug": "Revisa que este conectada correctamente",
            "port_unused_closed": "El puerto no esta vinculado a la boarddroid, así que se cerro.",
            "timeout": "La respuesta no se recibio en el tiempo especificado por la aplicación",
            "unknown": "Uy! te encontraste con un error desconocido",
        },
        "price": {
            "undefined": "El precio no esta definido, no se puede hacer un calculo con un valor indefinido",
            "missing_amount": "El monto a cobrar no se ha cubierto"
        },
        "console": {
            "log": {
                "change_not_completed": "El cambio no se entrego completo, falto por entregar {quantity} pesos",
            },
            "warn": {
                "nayax_config_pre_credit": "Debes configurar el monto de pre-crédito máximo autorizado por el Nayax.",
                "nayax_max_pre_credit": "Mandaste un valor superior al pre-credito autorizado por el Nayax.",
            }
        },
        "error":{
            "machine_unknown": "La máquina debe estar entre 1 y 31, por favor revisa tu código",
        }
    },
    "extension": {
        "display": {
            "reload": "Recargar",
            "device_disconnected": "Sin conexion con el dispositivo",
            "connection": {
                "lost": "Sin conexion con el dispositivo",
                "lost_errors": {
                    "window": "Es probable que abrieras otra ventana y provoco que la conexion existente se terminara",
                    "reloaded": "Se recargó con demasiada frecuencia la aplicación",
                    "solutions": {
                        "reload": "Intenta recargar la página",
                        "extension": "Forzar la recarga de la aplicación en 'extensions'",
                        "browser": "Cierra el navegador y vuelve a abrirlo"
                    },
                },
                "reconnecting": "Intentando reconectar",
                "connecting": "Intentando conectar"
            },
            "code": {
                "divided": "El código se dividio, es probable que el código sea inconcluso o no tenga un sentido legible. ",
            }
        }
    },
    "jofemar": {
        "status": {
            "h30": {
                "message": "Ready",
                "description": "La máquina esta lista."
            },
            "h31": {
                "message": "Busy",
                "description": "La máquina esta ocupada."
            },
            "h32": {
                "message": "",
                "description": "Bandeja no válida"
            },
            "h33": {
                "message": "",
                "description": "Canal no válido"
            },
            "h34": {
                "message": "",
                "description": "Canal vácio"
            },
            "h35": {
                "message": "",
                "description": "Avería en el motor del ascensor (Posible atasco)"
            },
            "h36": {
                "message": "",
                "description": "Avería en la cinta del ascensor o en el detector de producto"
            },
            "h37": {
                "message": "",
                "description": "Avería en alguno de los fototransistores del gabinete (Armario)"
            },
            "h38": {
                "message": "",
                "description": "Ningun canal detectado"
            },
            "h39": {
                "message": "",
                "description": "Avería en el detector de producto"
            },
            "h40": {
                "message": "",
                "description": null
            },
            "h41": {
                "message": "",
                "description": "Avería en el BUS 485"
            },
            "h42": {
                "message": "",
                "description": "Alarma de producto bajo el ascensor"
            },
            "h43": {
                "message": "",
                "description": "Alarma de ajuste del ascensor A24V"
            },
            "h44": {
                "message": "",
                "description": "Avería en la botonera"
            },
            "h45": {
                "message": "",
                "description": "Error de escritura en el EEPROM"
            },
            "h46": {
                "message": "",
                "description": "Error de comunicación con el control de temperatura"
            },
            "h47": {
                "message": "",
                "description": "Termometro desconectado"
            },
            "h48": {
                "message": "",
                "description": "Termometro desconfigurado"
            },
            "h49": {
                "message": "",
                "description": "Termometro averiado"
            },
            "h4A": {
                "message": "",
                "description": "Error de detección de consumo del extractor"
            },
            "h4B": {
                "message": "",
                "description": "Error en la busqueda de canal"
            },
            "h4C": {
                "message": "",
                "description": "Error busqueda boca de salida producto"
            },
            "h4D": {
                "message": "",
                "description": "Interior del ascensor bloqueado"
            },
            "h4E": {
                "message": "",
                "description": "Error en verificador de dectector de producto"
            },
            "h4F": {
                "message": "",
                "description": "Esperando retirada de producto"
            },
            "h50": {
                "message": "",
                "description": "Producto caducado por temperatura"
            },
            "h51": {
                "message": "",
                "description": "Puerta automatica averiada"
            },
            "nak": {
                "message": "Error",
                "description": "El CheckSum es incorrecto",
                "additional": "Uno o ambos checksum estan mal, por favor revisa el calculo."
            }
        },
        "other":{
            "keypress":{
                "message": "Envío de tecla presionada",
                "description": "La tecla \"{pressed_key}\" fue presionada en la máquina \"{no_machine}\".",
                "additional": "Código completo recibido: ",
            },
            "door":{
                "open":{
                    "message":"Puerta abierta",
                    "description":"Se abrió la puerta de la máquina \"{no_machine}\"",
                },
                "close":{
                    "message":"Puerta cerrada",
                    "description":"Se cerró la puerta de la máquina \"{no_machine}\"",
                }
            },
            "channel":{
                "disconnected":{
                    "message": "Deshabilitado",
                    "description": "Este canal no esta habilitado",
                },
                "connected":{
                    "message": "Habilitado",
                    "description": "Este canal si esta habilitado",
                },
                "sold_out":{
                    "message": "Agotado",
                    "description": "Este canal esta agotado, si es un error reinicia la memoria de la máquina",
                }

            }
        },
        "alone": {
            "message": "Ok",
            "description": "El último comando fue ejecutado correctamente.",
            "additional": "Normalmente esto sucede cuando la petición se realizó, sin embargo; se debe comenzar a solicitar el 'status' o 'Estado' de la máquina hasta que esta responda."
        },
    },
}
/**
 * Created by danidoble (https://github.com/danidoble)
 * @author Daniel Sandoval AKA danidoble
 * @year 2021
 * @website https://danidoble.com
 */