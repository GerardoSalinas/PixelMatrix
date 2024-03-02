package programLibraries;

import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.io.File;

import javax.imageio.ImageIO;

import java.awt.image.Raster;

import jakarta.servlet.http.HttpServletRequest;

public class ImageMakerMonocrome {
	
	public String maker(HttpServletRequest req) {
		if (req.getParameter("pixels") != null && 
			req.getParameter("w") != null && 
			req.getParameter("h") != null) {
			
			String pixels = req.getParameter("pixels");
			
			File myFile = new File("/home/gasallinas/Pictures/","pixelImage.bmp");
			byte[] bytes = this.toBytes(pixels);
			BufferedImage bufferedImage = new BufferedImage(25,25,BufferedImage.TYPE_BYTE_GRAY);
			bufferedImage.setData(Raster.createRaster(bufferedImage.getSampleModel(), new DataBufferByte(bytes,bytes.length), null));
			
			try {
				ImageIO.write(bufferedImage,"bmp",myFile);
				return String.format("Se ha creado la imagen %s en la ruta %s", myFile.getName(),myFile.getAbsolutePath());
			}catch(Exception e) {
				
			}
		}
		
				
		return null;
	}
	
	public byte[] toBytes(String pixels) {
		byte bytes[] = new byte[pixels.length()];
		for (int i = 0; i<pixels.length(); i++) {
			if (pixels.charAt(i) == '0') {
				bytes[i] = 0;
			}else {
				bytes[i] = (byte)255;
			}
		}
		
		return bytes;
	}
}