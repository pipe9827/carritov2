package com.carrito.domain;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;



import lombok.Data;

@Entity
@Data
@Table(name="detalle")
public class Detalle implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDetalle;
	
	
	private Integer cantidad;
	
	@ManyToOne
    @JoinColumn(name="id_producto_FK")
	private Producto producto ;
	
	@ManyToOne
	@JoinColumn(name="id_orden_FK")
	private Orden Orden;
	
	
}
