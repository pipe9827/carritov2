package com.carrito.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrito.dao.IDetalle;
import com.carrito.domain.Detalle;

@Service
public class DetalleServiceImpl implements IDetalleService {
	
	@Autowired
	private IDetalle detalleDao;

	@Override
	public List<Detalle> listarDetalles() {
		// TODO Auto-generated method stub
		return detalleDao.findAll();
	}

	@Override
	public Detalle guardar(Detalle detalle) {
		// TODO Auto-generated method stub
		return detalleDao.save(detalle);
	}

	@Override
	public void elminar(Detalle detalle) {
		// TODO Auto-generated method stub
		detalleDao.delete(detalle);
		
	}

	@Override
	public Detalle encontrarDetallePorId(Long id) {
		// TODO Auto-generated method stub
		return detalleDao.findById(id).get();
	}

}
