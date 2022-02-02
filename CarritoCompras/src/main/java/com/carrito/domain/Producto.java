package com.carrito.domain;

import java.io.Serializable;
import java.text.DecimalFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Entity
@Data
@Table(name="producto")
public class Producto implements Serializable{
	
	private static final long serialVersionUID=1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProducto;
	
	@NotEmpty
	private String nombre;
	
	@NotEmpty
	private String descripcion;
	
	private Double precio;
	
	@NotEmpty
	private String urlImagen;
	

}
