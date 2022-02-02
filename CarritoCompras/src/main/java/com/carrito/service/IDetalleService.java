package com.carrito.service;

import java.util.List;
import com.carrito.domain.Detalle;


public interface IDetalleService {

	public List<Detalle> listarDetalles();

	public Detalle guardar(Detalle detalle);

	public void elminar(Detalle detalle);

	public Detalle encontrarDetallePorId(Long id);
	
}
